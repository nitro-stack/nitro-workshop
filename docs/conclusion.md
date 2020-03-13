# Conclusion

Congratulations, you just built your *own* serverless API! ⚡️💪

Now that you master the basics of NestJS you can go wild and build just about anything, *the sky is the limit* (or more realistically, the cloud 😉).

## Wrapping up

Let's recap what you just did:

- You bootstrapped a new NestJS server, created an API and prepared for serverless deployment.
- You connected your API with a Database and added CRUD endpoints.
- You added support for file upload, storing images in the cloud.
- You provisioned Azure resources and deployed your app on it.

The finished source code example of every step can be found [here on GitHub](https://github.com/nitro-stack/nitro-workshop/releases), if you missed something or want to check your solution. You can also directly navigate the code on GitHub by clicking on the tag name in the left section of the release:

![github release tag](./images/tag.png =120x)

**I hope you enjoyed this workshop!**

You can follow me on [Twitter](http://twitter.com/sinedied) for more content, and I would be happy to discuss and get your feedback.

Don't hesitate to share this workshop if you liked it ⤵️
<p align="center"><social-share /></p>

## Reference links

Here is the list of everything we used in this workshop, as a reference:

- [Node.js](https://nodejs.org) as the base platform for everything
<!-- - [Angular](https://angular.io) with [@azure/ng-deploy](https://github.com/Azure/ng-deploy-azure) for the frontend -->
- [NestJS](https://nestjs.com) with [@nestjs/azure-func-http](https://github.com/nestjs/azure-func-http) for the backend
- [TypeORM](https://typeorm.io) with [@nestjs/typeorm](https://github.com/nestjs/typeorm) for mapping entities with the database
- [Azure Functions](https://azure.microsoft.com/services/functions/?WT.mc_id=nitro-workshop-yolasors) for API deployment
- [Azure Cosmos DB](https://azure.microsoft.com/services/cosmos-db/?WT.mc_id=nitro-workshop-yolasors) for the database
- [Azure Storage](https://docs.microsoft.com/azure/storage/blobs/storage-blob-static-website?WT.mc_id=nitro-workshop-yolasors) to host the website
- [Azure CLI](https://docs.microsoft.com/cli/azure/install-azure-cli?view=azure-cli-latest&WT.mc_id=nitro-workshop-yolasors) to manage resources
- [Azure Functions Core Tools](https://docs.microsoft.com/azure/azure-functions/functions-run-local#v2?WT.mc_id=nitro-workshop-yolasors) to test and deploy your backend

You should also take a look at [Hexa](https://github.com/manekinekko/hexa), a great CLI companion to create and deploy resources on Azure interactively.
