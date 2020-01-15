---
title: Step 1
description: Learn how to make Node.js serverless REST APIs with NestJS and Azure
permalink: step1
---

# 1. Bootstrap project

First, let's create a new folder in which we will put our server code.
```sh
mkdir funpets
cd funpets
```

## Create the server app

Use the following commands to install the NestJS CLI and create a new server app:
```sh
npm install -g @nestjs/cli
nest new funpets-server
cd funpets-server
```

It will create the base project configuration and install packages. Once it's done, you can test if it's working correctly by running the command:
```sh
npm start
```

It should start the server and print some logs in the console once it's started. Open a new terminal and run this command to check that it's responding:
```sh
curl http://localhost:3000
```

You should see `Hello World!` in the console if everything works well.

## Add your first endpoint

We can use the NestJS CLI again to create a new controller:
```sh
nest generate controller stories
```

Open the file `src/stories/stories.controller.ts` and add this pet fun facts list after the imports:

```ts
// Some cat facts, courtesy of https://catfact.ninja
const funFacts = [
  "Cats have supersonic hearing",
  "On average, cats spend 2/3 of every day sleeping. That means a nine-year-old cat has been awake for only three years of its life.",
  "A cat uses its whiskers for measuring distances. The whiskers of a cat are capable of registering very small changes in air pressure.",
  "A healthy cat has a temperature between 38 and 39 degrees Celcius.",
  "A cat’s jaw can’t move sideways, so a cat can’t chew large chunks of food.","Jaguars are the only big cats that don't roar.",
  "Cats have 'nine lives' thanks to a flexible spine and powerful leg and back muscles",
  "The cat's tail is used to maintain balance.",
  "The technical term for a cat’s hairball is a 'bezoar.'",
  "The first cat show was organized in 1871 in London. Cat shows later became a worldwide craze.",
  "A happy cat holds her tail high and steady.",
  "A cat can jump 5 times as high as it is tall."
];
```
Then add a new method in the existing `StoriesController` class, like this:

```ts
@Controller('stories')
export class StoriesController {

  @Get('random')
  getRandomStory(): string {
    return funFacts[Math.floor(Math.random() * funFacts.length)];
  }

}
```

Finally, add `Get` to the existing import so we can use this annotation:

```ts
import { Controller, Get } from '@nestjs/common';
```


Now let's break down what we just did:

- The `@Controller()` annotation specifies that this class will handle incoming **requests** and return **responses** to the client. The optional argument `'facts'` used here will be used as the base **route** prefix for all handlers defined within that class.

- The `@Get()` annotation defines a new HTTP GET request handler, creating a new endpoint. The optional argument `'random'` will be used as a path for this endpoint.

Combining the controller path prefix with our request handler path, NestJS will create the `GET /stories/random` HTTP endpoint.

This endpoint will return a status code `200` and the associated response, which in our case is just a string.

::: tip Note
You can look at the NestJS [controller documentation](https://docs.nestjs.com/controllers) for the list of all annotations and options that can be used to define endpoints.
:::

## Add a global API prefix

A common good practice is to define a global path prefix for all your endpoints, making it easy to later version your API or expose it alongside static assets.

You can do this in NestJS by editing the `src/main.ts` and call the `setGlobalPrefix()` method after the app creation:

```ts
const app = await NestFactory.create(AppModule);
app.setGlobalPrefix('api');
```

After this change, our HTTP endpoint will be `GET /api/stories/random`.

## Run the server

Our server is now ready for local testing, start it with the command:

```sh
npm start
```

After the server is started, you can test if our API is responding correctly using `curl`:

```sh
curl http://localhost:3000/api/stories/random
```

You should see a random cat fact in the console each time you invoke this command. You now have a working API! 🎉

Ok, this was just the warmup to get a hand of the NestJS API, now let's deploy what we just built before moving on to more serious stuff 💪.
