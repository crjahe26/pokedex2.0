const{ Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'student',
    password: 'adminStudent',
    database: 'the_pokedex'
});



module.exports = pool;