---
description: Learn how to make Node.js serverless REST APIs with NestJS and Azure
permalink: step3
---

# 3. Add database

Now that we have everything set up for our application code and deployment, we can go on with the more serious stuff and add a database instead of using hardcoded data.

## Configure Table Storage

[Table Storage](https://docs.microsoft.com/azure/storage/tables/table-storage-overview?WT.mc_id=nitro-workshop-yolasors) is a simple NoSQL key/value data store that will allow you to save and retrieve data.

You already created a storage account in the previous step, so you now have to generate an access token to allow our application to manipulate data in it:

```sh
# Get the storage account connection string
# Use here the storage account name you set in the previous step
az storage account show-connection-string --name <your_storage_account_name>

# Generate the SAS key
# It will be valid until the defined expiry date
az storage account generate-sas --account-name <your_storage_account_name> \
                                --services btf \
                                --resource-types sco \
                                --permissions acdlrw --expiry 2020-12-31
```

Now edit the file `local.settings.json`, and add these properties to the `Values` list:
```json
"AZURE_STORAGE_ACCOUNT": "<your storage account name>",
"AZURE_STORAGE_CONNECTION_STRING": "<your storage account connection string>",
"AZURE_STORAGE_SAS_KEY": "<your SAS key>"
```

Remove this line as it's not needed:
```json
"AzureWebJobsStorage": "",
```

These values will be exposed to our app as **environment variables** by the Functions runtime, to allow access to your Azure storage.

## Integrate with NestJS

You are now ready to integrate the database with your NestJS application. First, you have to install the `@nestjs/azure-database` package with this command:

```sh
npm install @nestjs/azure-database
```

Open the file `src/app.module.ts` and add the `AzureTableStorageModule` to the module imports:
```ts
@Module({
  imports: [
    AzureTableStorageModule.forFeature(Story, {
      table: 'stories',
      createTableIfNotExists: true,
    }),
    ...
  ]
```

Don't forget to add the missing imports at the top:
```ts
import { AzureTableStorageModule } from '@nestjs/azure-database';
import { Story } from './stories/story.entity';
```

But hey, we don't have a `Story` entity yet? That's right, let's create it!

## Create an entity

A database entity is used to model the properties of whatever object you would like to store. In our case, we would like to store fun pets stories, so let's create define a `Story` entity.

Create a new file `src/stories/story.entity.ts` with this code:
```ts
@EntityPartitionKey('stories')
@EntityRowKey('id')
export class Story {
  @EntityString() animal: string;
  @EntityString() description: string;
  @EntityString() imageUrl: string;
  @EntityDateTime() createdAt: Date;

  constructor(story?: Partial<Story>) {
    Object.assign(this, story);
  }
}
```

Now let's break down the annotations we have used:

- `@EntityPartitionKey` defines the table storage [`PartitionKey`](https://docs.microsoft.com/rest/api/storageservices/understanding-the-table-service-data-model?WT.mc_id=nitro-workshop-yolasors#partitionkey-property) which can be used to for load balancing across storage nodes.
- `@EntityRowKey` is the unique identifier of an entity with a given partition.
- The entity types annotations such as `@EntityString` represent the data type of each property.
You can find here the complete list of [Entity Data Model types](https://docs.microsoft.com/dotnet/framework/data/adonet/entity-data-model-primitive-data-types?WT.mc_id=nitro-workshop-yolasors)

## Inject the service

The next step is to inject the service that provides methods to perform CRUD operations on entities. The `@nestjs/azure-database` package gives you just that, using the annotation `@InjectRepository`.

Open the file `src/stories/stories.controller.ts` and add this constructor:

```ts
@Controller('stories')
export class StoriesController {
  constructor(
    @InjectRepository(Story)
    private readonly storiesRepository: Repository<Story>,
  ) {}
  ...
}
```

Don't forget to add these missing imports at the top of the file:

```ts
import { InjectRepository, Repository } from '@nestjs/azure-database';
import { Story } from './story.entity';
```

You can now use `this.storiesRepositoy` within your controller to perform [CRUD operations](https://github.com/nestjs/azure-database#crud-operations):

- `create(entity: T, rowKeyValue?: string): Promise<T>`: creates a new entity (if rowKeyValue is null, a UUID will be generated).
- `find(rowKey: string, entity: Partial<T>): Promise<T>`: finds one entity using its RowKey.
- `findAll(tableQuery?: azure.TableQuery, currentToken?: azure.TableService.TableContinuationToken): Promise<AzureTableStorageResultList<T>>`: finds all entities that match the given query (return all entities if no query provided).
- `update(rowKey: string, entity: Partial<T>): Promise<T>`: Updates an entity. It does a partial update.
- `delete(rowKey: string, entity: T): Promise<AzureTableStorageResponse>`: Removes an entity from the database.

## Add new endpoints

Now you have everything needed to create new endpoints to create and get stories:
```
GET /stories/:id  // Get the story with the specified ID
GET /stories      // Get all stories
POST /stories     // Create a new story
```

Let's start with the first one, to retrieve a single story using its ID. 
Add this method to your controller:

```ts
  @Get(':id')
  async getStory(@Param('id') id): Promise<Story> {
    try {
      return await this.storiesRepository.find(id, new Story());
    } catch (error) {
      // Entity not found
      throw new NotFoundException(error);
    }
  }
```

We use the `@Get()` annotation like in [Step 1](./step1.md#Add-your-first-endpoint), but this time specified a [route parameter](https://docs.nestjs.com/controllers#route-parameters) using `:id`.
This parameter can then be retrieved with the function arguments using the `@Param('id')` annotation.

Then we call the `storiesRepository.find()` method to find the matching entity. In case it's not found, we catch the error and return a status `404` error using NestJS  predefined exception class `NotFoundException`.

After that, it's time for you to work a bit by yourself to add the 2 remaining endpoints 😉.

::: tip Note
For the create endpoint, if the property `createdAt` is not set, it should be added with the current date.
:::

If you're stuck, you may find some help in the [NestJS documentation](https://docs.nestjs.com/controllers#full-resource-sample) and [@nestjs/azure-database documentation](https://github.com/nestjs/azure-database#crud-operations).

## Test your endpoints

After you finished adding the new endpoints, start your server using the functions emulator:

```sh
npm run start:azure
```

After the server is started, you can test if your new endpoints behave correctly using `curl`:

```sh
curl http://localhost:7071/api/stories
# should return an empty list: []

curl http://localhost:7071/api/stories/0
# should return 404 with an error

curl http://localhost:7071/api/stories \
  -X POST \
  -H "content-type: application/json" \
  -d '{ "animal": "cat", "description": "Cats have supersonic hearing" }'
# should return the newly created story

curl http://localhost:7071/api/stories
# should return a list with the previously added story

curl http://localhost:7071/api/stories/<RowKey_from_post_command>
# should return this single story
```

## Explore your data

As you should have created to stories at this point, why not take a look a the data you have created?

You can either use the standalone [Storage Explorer application](https://azure.microsoft.com/features/storage-explorer/?WT.mc_id=nitro-workshop-yolasors) for that, or go to the Azure portal and access the online version.

We only want to give a quick look, so let's use the online version:

1. Open [portal.azure.com](https://portal.azure.com?WT.mc_id=nitro-workshop-yolasors)

2. Use the search bar at the top and enter the name of the storage account you created, then click on it in the search results:
![searching your storage account](./images/storage1.png)

3. Click on **Storage Explorer** in the resource menu, then unfold the **TABLES** item to open the `stories` container where your data lives in:
![storage explorer](./images/storage2.png)

From there, you can query your stories, edit or delete them and even create new ones.
This tool can be helpful to quickly check your data visually and debug things when something's wrong.

## Redeploy

Now that everything works locally, let's deploy your latest changes:

```sh
# Build your app
npm run build

# Create an archive from your local files and publish it
# Don't forget to change the name with the one you used previously
func azure functionapp publish funpets-api \
  --nozip \
  --publish-local-settings
```

Notice that this time we added the `--publish-local-settings` option to update the 

Then invoke one of the newer API to check that deployment went fine:

```sh
curl https://<your-funpets-api>.azurewebsites.net/api/stories
```
