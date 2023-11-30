const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// GET /dtoons

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

// GET /dtoons/admindetails/:id
    router.get('/admindetails/:id', (req, res) => {
        console.log(`match found /dtoons/admindetails GET`);

        let queryText = `SELECT * FROM "dtoons" WHERE "id" = $1;`;
        pool.query(queryText, [req.params.id])
            .then((result) => {
                console.log(`success`);
                res.send(result.rows);
            }).catch((error) => {
                console.log(`error GET in server /dtoons/admindetails`, error);
                res.sendStatus(500);
            });
    });







// POST

router.post('/', (req, res) => {
    console.log(`/dtoons add new character`, req.body);

    let queryText = `
    INSERT INTO "dtoons" ("cardname", "character", "color", "number", "image", "abilityone", "abilitytwo", "type", "kind", "gender", "role")
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11);
    `;

    pool.query(queryText, [
            req.body.cardname, 
            req.body.character,
            req.body.color,
            req.body.number,
            req.body.image,
            req.body.abilityone,
            req.body.abilitytwo,
            req.body.type,
            req.body.kind,
            req.body.gender,
            req.body.role

        ]).then((result) => {
            console.log(`/dtoons POST success`);
            res.sendStatus(201);
    }).catch((error) => {
        console.log(`/dtoons POST error`);
        res.sendStatus(500);
    });
});

// PUT




// DELETE

router.delete('/:id', (req, res) => {
    console.log(`DELETE /dtoons`, req.params);

    let queryText = `DELETE FROM "dtoons" WHERE "id" = $1;`;

    pool.query(queryText, [req.params.id])
        .then((result) => {
            console.log(`DELETE /dtoons success`);
            res.sendStatus(201);
        }).catch((error) => {
            console.log(`DELETE /dtoons Error`);
            res.sendStatus(500);
        });
});

module.exports = router;
