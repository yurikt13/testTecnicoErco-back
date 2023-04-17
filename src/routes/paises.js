const express = require('express');

const bdClient = require('../bd/bd');
const router = express.Router();

router.get('/', async function (req, res) {
    const paises = await bdClient.query(`
        SELECT * FROM public.countries
    `)
    if (paises.rows.length === 0) {
        res.status(404).send('No encontré paises')
    }
    res.status(200).json({
        paises: paises.rows
    })
})


module.exports = router;