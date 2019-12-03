# Deploy application




2. Install NestJS CLI and scaffold new server app
3. Create get random cat fact endpoint, using static data
4. Add a global API prefix
5. Run and test using a pre-made frontend (alt. scenario: prepare frontend in either Angular, React & Vue).
    1. Need to setup server with local proxy to API to avoid CORS issue at this point
6. Update NestJS app to serverless using @nestjs/azure-func-http, test with func cli
7. Create the resources and deploy to Azure Functions
8. Test the frontend with deployed API URL, fix CORS issue using az cli