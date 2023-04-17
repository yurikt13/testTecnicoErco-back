const express = require('express');

const bdClient = require('../bd/bd');
const router = express.Router();

router.get('/:id', async function (req, res) {

    const {id} = req.params
    const estados = await bdClient.query(`
        SELECT * FROM public.state where "ID_COUNTRY"='${id}'
    `)
    if (estados.rows.length === 0) {
        res.status(404).send('No encontré estados')
    }
    res.status(200).json({
        estados: estados.rows
    })
})



module.exports = router;