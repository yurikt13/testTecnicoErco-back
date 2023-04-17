const express = require('express');
const cors = require('cors');
const app = express();
const paises = require('./routes/paises')
const estados = require('./routes/estados')
const ciudades = require('./routes/ciudades')

//configuración
app.use(cors());
app.use(express.json());

//rutas
app.use('/paises', paises)
app.use('/estados', estados)
app.use('/ciudades', ciudades)


app.listen(3300, () => {
    console.log('Escuchando...')
})