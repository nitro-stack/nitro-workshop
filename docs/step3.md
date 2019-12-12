---
permalink: step3
---

# 3. Add database

Now that we have everything set up for our application code and deployment, we can go on with the more serious stuff and add a database instead of using hardcoded data.

## Configure Table Storage

[Table Storage](https://docs.microsoft.com/en-us/azure/storage/tables/table-storage-overview) is a simple NoSQL key/value data store that will allow us to quickly store and retrieve data.

We already created a storage account in the previous step, so we now have to generate an access token to allow our application to manipulate data in it:

```sh
# Get the storage account connection string
# Use here the storage account name you set in the previous step
az storage account show-connection-string --name  <your_storage_account_name>

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

These values will be exposed to our app as **environment variables** by the Functions runtime, to allow access to your Azure storage.

## Integrate with NestJS

You are now ready to integrate the database with your NestJS application. First you have to install the `@nestjs/azure-database` package with this command:

```sh
npm install @nestjs/azure-database
```

Open the file `src/app.module.ts`, and add the `AzureTableStorageModule` to the modules imports:
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
import { Story } from './stories/story.entity.ts';
```

But hey, we don't have a `Story` entity yet? That's right, let's create it!


<!-- az functionapp config appsettings set --name funpets-api -g funpets --settings 'SCM_DO_BUILD_DURING_DEPLOYMENT=true'

SCM_DO_BUILD_DURING_DEPLOYMENT=true -->

<!-- Then create a `.env` file at the root of the server folder with the generated key and connection string, like this:

```
AZURE_STORAGE_ACCOUNT=<your storage account name>
AZURE_STORAGE_CONNECTION_STRING=<your storage account connection string>
AZURE_STORAGE_SAS_KEY=<your SAS key> -->
```

## Create an entity

A database entity is used to model the properties of whatever object you would like to store. In our case, we would like to store fun pets stories, so let's create define a `Story` entity.

Create a new file `stories/story.entity.ts` with this code:
```ts

```



## Create the service

## Add new endpoints


get/ stories/:id

get/ stories
post/ stories
delete/ stories/:id



1. Create table storage with az cli, and sas token
2. Integrate @nestjs/azure-table-storage
3. Create cat fact entity
4. Create CRUD service connected to table storage
5. Update get cat fact endpoint using service
6. Go to web storage explorer, import pre-made data to populate the DB
7. Test the get endpoint with curl
8. Create post / delete cat fact endpoint
9. Test the new endpoints with curl
10. Redeploy
11. Test with frontend
