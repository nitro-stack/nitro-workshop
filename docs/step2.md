---
description: Learn how to make Node.js serverless REST APIs with NestJS and Azure
permalink: step2
noGlobalSocialShare: true
---

# 2. Deploy application

Before going further with our API, let's deploy it, serverless way!

> But we haven't done anything meaningful yet, shouldn't we integrate all our features before deploying?

Not at all! Deploying **early** and **frequently** is a factor of success in software development and a [DevOps](https://azure.microsoft.com/overview/what-is-devops/?WT.mc_id=nitro-workshop-yolasors&ocid=aid2462702_ThankYou_DevComm&eventId=SnowcampWorkshop__J-5rEio2r5p) best practice.

## Go serverless

Why serverless? Why not deploy our app using a container or a managed service, like [Azure App Service](https://docs.microsoft.com/azure/app-service/?WT.mc_id=nitro-workshop-yolasors&ocid=aid2462702_ThankYou_DevComm&eventId=SnowcampWorkshop__J-5rEio2r5p) for instance? There are 2 main reasons for that:

- You only pay for what you use, not for the resource allocation (and it's [dead cheap](https://dev.to/azure/is-serverless-really-as-cheap-as-everyone-claims-4i9n))
- It scales automatically without any additional setup

First, let's update our NestJS app into a serverless app so we can deploy it to [Azure Functions](https://docs.microsoft.com/azure/azure-functions/?WT.mc_id=nitro-workshop-yolasors&ocid=aid2462702_ThankYou_DevComm&eventId=SnowcampWorkshop__J-5rEio2r5p).

::: info What's Azure Functions?
It's a solution for running small pieces of code, or *functions*, in the cloud. You just write the code for the problem at hand in your preferred language, without worrying about the infrastructure or enclosing app to run it.
:::

Open a terminal and run this command:
```sh
nest add @nestjs/azure-func-http
```

And... That's it. Really.

![grandma looking surprised](./images/thats-it.jpg)

Thanks to the included schematics, your server code is now ready to be deployed on Azure Functions. And the best part is that nothing was changed in your code, it can still run locally like previously.

If you take a closer look, here is what has been added:

- `main`: a folder containing the Azure Functions trigger config and entry point
- `src/main.azure.ts`: an alternative entry point for your server app that will be used only on Azure Functions (thus leaving the regular entry point intact).
- Some config files in the project's root, we do not need to care about them for now.
- A new `start:azure` NPM script in your `package.json` file, allowing to run your API locally but with the Azure Functions simulator this time.

To be able to use the command `npm run start:azure`, you must have installed the [Azure Functions Core Tools](https://docs.microsoft.com/azure/azure-functions/functions-run-local#v2?WT.mc_id=nitro-workshop-yolasors&ocid=aid2462702_ThankYou_DevComm&eventId=SnowcampWorkshop__J-5rEio2r5p) with the [prerequisites](/env). It will provide the `func` CLI that you can use to test your functions and deploy them to Azure.

Now let's test our API running on a function:

```sh
npm run start:azure
```

If everything is working well, at some point you should see this log in the console:

```
Now listening on: http://0.0.0.0:7071
Application started. Press Ctrl+C to shut down.

Http Functions:

        main:  http://localhost:7071/api/{*segments}
```

That means that your API should be working on port `7071`, let's test it again using curl:

```sh
curl http://localhost:7071/api/stories/random
```

## Create the resources

Now that your API is ready to run on Functions, let's deploy it to the real thing!

First, we have to create some Azure resources. For that we will use the Azure CLI commands:

```sh
# Login to Azure, should only be needed once
az login

# Create a new resource group
az group create --name funpets --location northeurope

# Create the storage account
# This name must be globally unique, so change it with your own
az storage account create --name funpets \
                          --resource-group funpets \
                          --kind StorageV2

# Create the function app
# This name must be globally unique, so change it with your own
az functionapp create --name funpets-api \
                      --resource-group funpets \
                      --consumption-plan-location northeurope \
                      --storage-account funpets
```

The first thing we created is a [**resource group**](https://docs.microsoft.com/azure/azure-resource-manager/resource-group-overview?WT.mc_id=nitro-workshop-yolasors&ocid=aid2462702_ThankYou_DevComm&eventId=SnowcampWorkshop__J-5rEio2r5p#resource-groups), a collection of Azure resources. It's typically used to group related resources for an application, by environment (production vs testing for example) or anything as needed.

Then we added a [**storage account**](https://docs.microsoft.com/azure/storage/common/storage-introduction?WT.mc_id=nitro-workshop-yolasors&ocid=aid2462702_ThankYou_DevComm&eventId=SnowcampWorkshop__J-5rEio2r5p#azure-storage-services) that will be used to store our app data, file and even application code. 

Finally, we added a [**function app**](https://docs.microsoft.com/azure/azure-functions/functions-overview?WT.mc_id=nitro-workshop-yolasors&ocid=aid2462702_ThankYou_DevComm&eventId=SnowcampWorkshop__J-5rEio2r5p) on which you will deploy your API.

## Deploy your app

To make deployment easier and faster for this workshop we will add a bit of specific configuration to your function app:

```sh
# Don't forget to change the name with your own
az functionapp config appsettings set --name funpets-api \
                                      --resource-group funpets \
                                      --settings "SCM_DO_BUILD_DURING_DEPLOYMENT=true"
```

::: warning Important
Edit the `.funcignore` file and add a line with `node_modules` at the bottom.
:::

The `SCM_DO_BUILD_DURING_DEPLOYMENT=true` setting will enable a "build" step for zip deployments, which for Node.js apps translates to `npm install` being called on the server directly.
This way you don't have to package the required `node_modules` with your app, reducing upload times a lot.

Now that we have the resources created and configured on Azure, we can use the `func` CLI to deploy our API:

```sh
# Build your app
npm run build

# Create an archive from your local files and publish it
# Don't forget to change the name with the one you used previously
func azure functionapp publish funpets-api --nozip
```

After publishing, you should see in the console the URL you can use to invoke the function, like this:

```
Functions in funpets-api:
    main - [httpTrigger]
        Invoke url: https://<your-funpets-api>.azurewebsites.net/api/{*segments}
```

We can invoke our trusty `curl` command again to check the deployment using the previous URL:

```sh
curl https://<your-funpets-api>.azurewebsites.net/api/stories/random
```

Server deployment, done ✔️.

::: tip Pro tip #1
When working on a production app, you should not deploy directly from your local source code, but rather connect your source code repository to a continuous integration and deployment system (CI/CD). You can either do that using [Azure DevOps](https://docs.microsoft.com/azure/devops-project/azure-devops-project-github?WT.mc_id=nitro-workshop-yolasors&ocid=aid2462702_ThankYou_DevComm&eventId=SnowcampWorkshop__J-5rEio2r5p) or directly connect your repository for deployment using this command:
```sh
az functionapp deployment source config --name <your-funpets-api> \
                                        --resource-group funpets \
                                        --repo-url <your-git-repo-url>
```
:::

::: tip Pro tip #2
For this workshop, we use the `--nozip` option for deployment to disable the *Run-From-Package* mode that runs the app directly from a read-only zip package. This is needed to run `npm install` remotely thanks to the `SCM_DO_BUILD_DURING_DEPLOYMENT=true` setting, to reduce upload times. But for production environments, you should avoid using that as your application startup time is slightly longer when `--nozip` option is used.
:::
