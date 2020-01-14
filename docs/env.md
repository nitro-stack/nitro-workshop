# 0. Prerequisites
## Install required tools

To follow this workshop, you need these to have these tools installed:

- A working [Node.js](https://nodejs.org) environment (latest LTS version recommended)
- The [Azure CLI](https://docs.microsoft.com/cli/azure/install-azure-cli?view=azure-cli-latest?WT.mc_id=nitro-workshop-yolasors) to create resources on Azure. If you do not want to install it locally, you can use [shell.azure.com](https://shell.azure.com/?WT.mc_id=nitro-workshop-yolasors).
- [Azure Functions Core Tools](https://docs.microsoft.com/azure/azure-functions/functions-run-local#v2?WT.mc_id=nitro-workshop-yolasors) to test your functions locally.
- A code editor of your choice. If you don't have any code editor installed on your machine, you can install [Visual Studio Code](https://code.visualstudio.com?WT.mc_id=nitro-workshop-yolasors).

An Azure account is also needed to create resources and deploy the application. If you don't have an account, you can [create one for free using this link](https://azure.microsoft.com/free/?WT.mc_id=nitro-workshop-yolasors). It includes free credits, more than enough to cover usage for this workshop 😉.

### Alternative: using Docker and Visual Studio Code

If you have Docker and Visual Studio Code installed on your machine, you can use the [Remote Development extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack&WT.mc_id=nitro-workshop-yolasors) and a pre-made Docker image with everything needed installed.

1. Install the VS Code extension:
  ```
  code --install-extension ms-vscode-remote.vscode-remote-extensionpack
  ```
2. Unzip [this file](./devcontainer.zip) in your project folder
3. Open your project folder in VS Code, then click `Reload in container` when you see this popup:
   ![remote extension popup](./images/remote-open.png)
4. Once the Docker image is built (it might take a few minutes), you should see this in the left part of the status bar
    ![remote extension status command](./images/remote-status.png)

## Test your environment

Open up a terminal, then type these commands:
```
node -v
npm -v
az -v
```
If you see all the tools version printed in the console, you're ready to go! 🎉
