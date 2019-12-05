# Introduction

## What will you learn here?
In this workshop, we will:
- Build a Node.js REST API from scratch using NestJS framework
- Connect your API with a Database to save and retrieve data using entities
- Create a file upload API to store images in the cloud
- Deploy your API using Azure Serverless platform

Because it's better to learn new things while having fun, we will build a social service to share fun facts and pictures about your favorite pets! 🐱🐶🐹🐰

## Meet the stack

Our focus will be centered on NestJS and Azure.
If you never used these tools before don't worry, it's the perfect chance to get to know them. Here is a quick presentation for starters.

### NestJS [(docs.nestjs.com)](https://docs.nestjs.com) 

![nestjs logo](./images/nestjs.svg =100x)

NestJS is a framework for building efficient, scalable [Node.js](https://nodejs.org) server-side applications. It is built with and fully supports [TypeScript](http://www.typescriptlang.org), and uses latest design patterns and best practices allowing to built robust modern apps easily.

Under the hood, NestJS makes uses of [Express](https://expressjs.com) HTTP server but can optionally be configured to use [Fastify](https://github.com/fastify/fastify), allowing you to leverage the huge ecosystem of their assocaited libraries.

::: tip Did you know?
NestJS leverages similar concepts, features, architecture and tools as [Angular](https://angular.io) framework, but tailored for Node.js backend development.
:::

### Azure [(azure.microsoft.com/overview)](https://azure.microsoft.com/overview/what-is-azure/?WT.mc_id=nitro-workshop-yolasors)

![azure logo](./images/azure.svg =400x)

Azure is Microsoft's cloud computing offer for building, testing, deploying and managing applications and services. The platform provides [IaaS](https://azure.microsoft.com/overview/what-is-iaas/?WT.mc_id=nitro-workshop-yolasors), [PaaS](https://azure.microsoft.com/overview/what-is-paas/?WT.mc_id=nitro-workshop-yolasors) and [SaaS](https://azure.microsoft.com/overview/what-is-saas/?WT.mc_id=nitro-workshop-yolasors) solutions with an ever extending range of services.

For this workshop, we will use [serverless services](https://azure.microsoft.com/solutions/serverless/?WT.mc_id=nitro-workshop-yolasors) to store data and host our application without having to manage any of the underlying infrastructure. In particular:
- [Azure Functions](https://azure.microsoft.com/services/functions/?WT.mc_id=nitro-workshop-yolasors) to deploy application code
- [Azure Table Storage](https://azure.microsoft.com/services/storage/tables/?WT.mc_id=nitro-workshop-yolasors), a simple NoSQL database to store our entities
- [Azure Blob Storage](https://azure.microsoft.com/services/storage/blobs/?WT.mc_id=nitro-workshop-yolasors) to store image files

### Nitro [(nitro.ooo)](https://nitro.ooo)

![nestjs logo](nitro.png =100x)

Nitro is a growing set of open-source developer tools to help you build, deploy and scale Node.js apps on Microsoft Azure.

It's designed in particular to leverage Azure Serverless platform be able to push *your* app in production in no time, at a reduced cost.
