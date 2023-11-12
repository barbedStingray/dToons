const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// GET

router.get('/', (req, res) => {
    console.log(`match found /dtoons GET`);

    let queryText = `SELECT * FROM "dtoons";`;

    pool.query(queryText).then((result) => {
        console.log(`GET /dtoons success`);
        res.send(result.rows);
    }).catch((error) => {
        console.log(`error GET /dtoons`);
        res.sendStatus(500);
    });
});

// POST

// PUT

// DELETE

module.exports = router;
