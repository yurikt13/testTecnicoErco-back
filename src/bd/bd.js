//declaro clase cliente que tiene todas las funcionalidades para interactuar con la bd(conectarse, hacer peticiones)
const { Client } = require('pg');

const connectionData = {
    user: 'postgres',
    host: 'localhost',
    database: 'test-tecnico',
    password: 'taejunk13',
    port: 5432
}

const client = new Client(connectionData)

client.connect()


//La query se hace en otro archivo, por eso hay q exportarlo
module.exports = client;
