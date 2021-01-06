const hostname = "psql-server-hw-dev"

module.exports = {

  "local": {
    "username": "node",
    "password": "p4ssw0rD",
    "database": "app",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },

  "dev": {
    "username": `group-hw-dev-psql-user@${hostname}`,
    "password": null,
    "database": "appdb",
    "host": `${hostname}.postgres.database.azure.com`,
    "dialect": "postgres",
    "dialectOptions": {
      "ssl": {"rejectUnauthorized": false}
    }
  }
  
};
