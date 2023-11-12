const pg = require('pg');

const pool = new pg.Pool({
    host: 'localhost',
    port: 5432,
    database: 'dtoon_cards', 
});

module.exports = pool;
