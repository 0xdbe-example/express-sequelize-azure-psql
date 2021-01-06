# Express Sequelize Azure PSQL

This application is a prototype for testing Managed Identity with an Azure Database for Postgresql.

## Deploy Infra

```
cd infra
terraform init
terraform apply
```

## Deploy Application

### Locally

```
NODE_ENV="local" npm start
```

### Azure

```
cd backend
export APP_NAME=app-hw-dev
git init
git add -A
git commit -m "first release"
git remote add azure https://${APP_NAME}.scm.azurewebsites.net:443/${APP_NAME}.git
git push azure master
```

## Usage

- Create customer

```
$ curl --header "Content-Type: application/json" \
  --request POST \
  --data '{"name":"test","creditcard":"1111-2222-3333-4444"}' \
  http://localhost:3000/customers
```

```
$ curl --header "Content-Type: application/json" \
  --request POST \
  --data '{"name":"test","creditcard":"1111-2222-3333-4444"}' \
  https://app-hw-dev.azurewebsites.net/customers
```

- Get all

 ```
 $ curl http://localhost:3000/customers
 $ curl https://app-hw-dev.azurewebsites.net/customers
 ```

## How I did

```
npx express-generator --view pug \ DemoApp
npm install
npm install --save sequelize
npm install --save pg pg-hstore
npx sequelize-cli init
npx sequelize-cli model:generate --name Customer --attributes name:string,creditCard:string
```

- Configure sequelize to use Managed identity

```
const { DefaultAzureCredential } = require("@azure/identity");

sequelize.beforeConnect(async (config) => {
  let credential = new DefaultAzureCredential();
  let accessToken = await credential.getToken('https://ossrdbms-aad.database.windows.net/.default');
  config.password = accessToken.token;
});
```

- Create router and controller for customers
