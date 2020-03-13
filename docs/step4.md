---
permalink: step4
---

# 4. Integrate file upload

Our API is starting to look great now that we can add new stories. But it would be even better if we could attach some cute pictures to our stories, right?

![happy cay saying yes](./images/happycat.jpg =400x)

## Set up storage account access

You already created a storage account in [Step 2](/step2), so you now have to generate an access token to allow our application uploading files in it:

```sh
# Generate the SAS key
# It will be valid until the defined expiry date
az storage account generate-sas --account-name <your-funpets-storage> \
                                --services btf \
                                --resource-types sco \
                                --permissions acdlrw --expiry 2021-12-31
```

Now edit the file `local.settings.json`, and add these properties to the `Values` list:
```json
"AZURE_STORAGE_ACCOUNT": "<your storage account name>",
"AZURE_STORAGE_SAS_KEY": "<your SAS key>"
```

These values will be exposed to our app as **environment variables** by the Functions runtime, to allow access to your Azure storage.

## Configure Azure Storage module

We will use [Azure Blob Storage](https://azure.microsoft.com/services/storage/blobs/?WT.mc_id=nitro-workshop-yolasors) to store pets images in the cloud. It can be used to store any kind of file, and is also capable of [hosting static websites](https://docs.microsoft.com/azure/storage/blobs/storage-blob-static-website?WT.mc_id=nitro-workshop-yolasors).

As you already created and set up your storage account access, you only need to integrate the `@nestjs/azure-storage` package with this command:

```sh
npm install @nestjs/azure-storage
```

Open the file `src/app.module.ts` and add the `AzureStorageModule` to the module imports:
```ts
@Module({
  imports: [
    AzureStorageModule.withConfig({
      sasKey: process.env.AZURE_STORAGE_SAS_KEY,
      accountName: process.env.AZURE_STORAGE_ACCOUNT,
      containerName: 'funpets-images',
    }),
    ...
  ]
```

Don't forget to add the missing imports at the top:
```ts
import { AzureStorageModule } from '@nestjs/azure-storage';
```

## Handle file upload

Now let's update the `POST /api/stories` endpoint to add support for image upload.

Open `src/stories/stories.controller.ts` and update the function you created to create new stories:
- Add `@UseInterceptors(AzureStorageFileInterceptor('file'))` just below the `@Post()` annotation.
- Add `@UploadedFile() file: UploadedFileMetadata` in the function parameters.

Don't forget to also add the missing imports at the top:
```ts
import { FileInterceptor } from '@nestjs/platform-express';
import { AzureStorageFileInterceptor, UploadedFileMetadata } from '@nestjs/azure-storage';
import { UseInterceptors, UploadedFile } from '@nestjs/common';
```

The `AzureStorageFileInterceptor` will directly upload the file to Azure Storage container `funpets-images` specified in the module configuration, and will fill in the stored file URL in `file.storageUrl`.

Once you have the storage URL you can set the `imageUrl` of the created `Story` entity.

Your final function should look like this:

```ts
@Post()
@UseInterceptors(AzureStorageFileInterceptor('file', fileUploadOptions))
async createStory(
  @Body()
  data: Partial<Story>,
  @UploadedFile()
  file: UploadedFileMetadata,
): Promise<Story> {
  const story = new Story(data);
  if (!story.createdAt) {
    story.createdAt = new Date();
  }
  if (file) {
    story.imageUrl = file.storageUrl || null;
  }
  return await this.storiesRepository.save(story);
}
```

## Test your endpoint

After you finished the modifications, start your server using the functions emulator:

```sh
npm run start:azure
```

After the server is started, you can test if uploading file works using `curl`:

```sh
curl http://localhost:7071/api/stories \
  -F "file=@<path_to_image_file>" \
  -F "animal=cat" \
  -F "description=Happy cat"
```

You can download and use the [the happy cat image](#_4-integrate-file-upload) to test the file upload if don't have an image at hand.

::: info Note
Using the `-F` curl option will automatically set the request content type to `multipart/form-data` which is required for Nest.js file upload support. Note that in that case, the payload for the `Story` property will also have to be form data and not JSON, as you can see in the curl command.
:::

## Limit accepted file type/size

Your API now supports file uploads, but surely you don't want *any* file to be uploaded and may want to set some reasonable limits on file size?

Just like the base NestJS [`FileInterceptor`](https://docs.nestjs.com/techniques/file-upload#basic-example), the `AzureStorageFileInterceptor()` decorator supports a second `options` argument. The `options` object is of type `MulterOptions` and can be used to achieve what we want, using the `limits` and `fileFilter` properties. This is the same object used by [the multer constructor](https://github.com/expressjs/multer#multeropts).

::: info Note
[Multer](https://github.com/expressjs/multer) is the underlying Express middleware used by NestJS to handle file uploads.
:::

Now it's your time to work and find out how to restrict file uploads to support only:
- Maximum file size of 2MB
- `png` and `jpeg` image types

Some hints to get started:
- Look at the [`limits`](https://github.com/expressjs/multer#limits) and [`fileFilter`](https://github.com/expressjs/multer#filefilter) options to see how they work.
- You can get the uploaded file name using `file.originalname`.
- Explore Node.js [`path` module](https://nodejs.org/api/path.html) to get extract extension from a file name.

Don't forget to test your solution with various scenarios using `curl`, to make sure your API accepts/rejects files properly!

::: tip Tip
you can use `mkfile <size[k|m]> <filename>` to generate dummy files with a given size (for Windows users: `fsutil file createnew <filename> <size_in_bytes>`).
:::

## Redeploy

Once everything works locally let's deploy your latest changes:

```sh
# Build your app
npm run build

# Create an archive from your local files and publish it
# Don't forget to change the name with the one you used previously
func azure functionapp publish <your-funpets-api> --nozip
```

Then run again the previous `curl` command against your deployed API URL to check that everything works fine:

```sh
curl https://<your-funpets-api>.azurewebsites.net/api/stories
  -F "file=@<path_to_image_file>" \
  -F "animal=cat" \
  -F "description=Happy cat"
```

<br>

-----
**Solution:** see the [code for step 4](https://github.com/nitro-stack/nitro-workshop/tree/step4)