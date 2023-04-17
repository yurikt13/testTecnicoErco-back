const express = require('express');

const bdClient = require('../bd/bd');
const router = express.Router();

router.get('/:id', async function (req, res) {

    const { id } = req.params
    const ciudades = await bdClient.query(`
        SELECT * FROM public.cities where "ID_STATE"='${id}'
    `)
    if (ciudades.rows.length === 0) {
        res.status(404).send('No encontré ciudades')
    }
    res.status(200).json({
        ciudades: ciudades.rows
    })
})


module.exports = router;