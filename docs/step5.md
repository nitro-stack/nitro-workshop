---
description: Learn how to make Node.js serverless REST APIs with NestJS and Azure
permalink: step5
---

# 5. Extras

At this point, you already have a working full-featured serverless API, well done! 🎉

NestJS is a very comprehensive framework, and there could be a lot more use-cases to cover for your specific needs. I encourage you to dive into the [NestJS documentation](https://docs.nestjs.com/) to learn more about the techniques and tools you can use.

If you have more time and feel like it, here are some extras points that I found interesting to cover, especially if you want to build enterprise apps.

Note that each of these extra parts is entirely independent, so you can skip to the one you are the most interested in or do them in any order 😉.

<!--
## Manage authentication
+ delete endpoints
-->

## Add data validation

It is a best practice to check and validate any data received by an API.
What do you think would happen if you call your story creation endpoint, but without providing data?

Let's try!

```sh
curl http://localhost:7071/api/stories -X POST -d ""
```

Whoops! A new story is created, but with our entity properties are left empty 😱.

We might want to make sure a new story has its `animal` field set and either a `description` or an image provided.

Nest.js provides a built-in `ValidationPipe` that enforce validation rules for receveid data payloads, thanks to annotations provided by the [`class-validator`](https://github.com/typestack/class-validator) package.

To use it, you have to create a DTO ([Data Transfer Object](https://en.wikipedia.org/wiki/Data_transfer_object)) class on which you will declare the validations rules using annotations.

First, you need to install the required packages:

```sh
npm install class-validator class-transformer
```

Then create the file `src/stories/story.dto.ts`:

```ts
export class StoryDto {
  @IsNotEmpty()
  animal: string;
  
  @IsOptional()
  description: string;
  
  @IsOptional()
  createdAt: Date;
}
```

It looks like a lot like our `Story` entity, but this time you define only properties that are expected in the request payload. That's why there is no `imageUrl` property here: it will be set by the controller only if an image file is uploaded.

The annotations `@IsNotEmpty()` and `@IsOptional()` describe which property can be omitted and which one can be set in the payload. You can see the complete list of provided decorators [here](https://github.com/typestack/class-validator#validation-decorators).

Now open `src/stories/stories.controller.ts` and change the type of the `data` parameter of your `POST` function to `StoryDto`:

```ts
...
async createStory(
  @Body()
  data: StoryDto,
  @UploadedFile()
  file: UploadedFileMetadata,
): Promise<Story> {
...
```

Finally open `src/main.azure.ts` and enable `ValidationPipe` at the application level, to ensure all endpoints gets data validation:

```ts
const app = await NestFactory.create(AppModule);
app.setGlobalPrefix('api');
app.useGlobalPipes(new ValidationPipe());
```

Start your server with `npm run start:azure` and run the previous `curl` command again. This time you should properly receive an HTTP error `400` (bad request).

::: tip Pro tip
By default, detailed error messages will be automatically generated in case of a validation error. You also specify custom error message in the decorator options, for example:
```ts
@IsNotEmpty({ message: 'animal must not be empty' })
animal: string;
```
You also use special tokens in your error message or use a function for better granularity. See the [`class-validator` documentation](https://github.com/typestack/class-validator#validation-messages) for more details.
:::

What about our other constraint, which is to have either a `description` or an image file provided?

Since the `imageUrl` information is not directly part of the DTO, we cannot use it for validation. As the `imageUrl` property is set in the controller, that's where you have to perform manual validation. You can use the [manual validation methods](https://github.com/typestack/class-validator#manual-validation) of the `class-validator` package for that.

This time, it's your turn to finish the job!
- Ensure that either `description` or `imageUrl` is not empty, using manual validation.
- Ensure that `description` length is at most 240 characters.
- Ensure that `animal` is either set to `cat`, `doc` or `hamster` using annotations.
- Ensure that `createdAt` is a date if provided, using annotations.

You can read more on data validation techniques in the [NestJS documentation](https://docs.nestjs.com/techniques/validation).

## Enable CORS

If you try to access your API inside a web application from your browser, you might encounter an error like that one:

![CORS error](./images/cors-error.jpg)

This error occurs because browsers block HTTP requests from scripts to web domains different than the one of the current web page to improve security.

To bypass this restriction, your server must define specific HTTP headers to allow it. This mechanism is called [Cross-Origin Resource Sharing](https://developer.mozilla.org/docs/Web/HTTP/CORS) (CORS).

CORS is already enabled by default on Azure Functions but you must add your website domain to the list of allowed origins using this command:

```
# Don't forget to change the name and URL with your own
$ az functionapp cors add \
    --name funpets-api \
    --resource-group catfacts \
    --allowed-origins https://yourwebsite.com
```

If you want to allow any website to use your API, you can replace the website URL by using `*` instead. In that case, be careful as Azure Functions will auto-scale to handle the workload if millions of users starts using it, but so will your bill!

<!--
## Integrate Swagger

[Swagger](https://swagger.io) is a widely used set of tools built around the [OpenAPI](https://swagger.io/specification/) specification. These tools allows you to:
- Provide a langage-agnostic definition of your REST APIs.
- Generate clients to consume your APIs in many languages
- Host an interactive UI to browse your APIs

NestJS provides a dedicated [module](https://github.com/nestjs/swagger) to integrate Swagger tools in your application with little effort.

First, install the required dependencies:

```sh
npm install --save @nestjs/swagger swagger-ui-express
```

Then open `src/main.azure.ts` to add Swagger initialization when your application starts:

```ts
import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

export async function createApp(): Promise<INestApplication> {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');

  const options = new DocumentBuilder()
    .setTitle('Funpets API')
    .setDescription('Manage fun pets stories and pictures')
    .setVersion('1.0')
    .addTag('stories')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('swagger', app, document);

  await app.init();
  return app;
}
```

The `DocumentBuilder` creates the base OpenAPI specification for you application.
It provides methods to set the title, description and version of your API. You also need to use the `addTag()` method to define which part of your API you want to document.

Then after the document is created, the `setup()` method will mount the [Swagger UI](https://swagger.io/tools/swagger-ui/) at the path specified, in this case `/api/swagger`.

Now start your server:

```sh
npm run start:azure
```

Keep your server running and open your browser to `http://localhost:7071/api/swagger`. You should see something like this:

TODO: pro tip JSON, add manual docs
 -->
 
<!--
## Write tests

Automated testing is a fundamental requirement to develop robust software applications. It helps catching bugs early, preventing regressions and ensuring that production releases meet your quality and performance goals.

TODO:

https://docs.nestjs.com/fundamentals/testing
 -->
