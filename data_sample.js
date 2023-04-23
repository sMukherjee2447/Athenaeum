const {
    Pool
} = require('pg');
const conn = new Pool({
    host: 'localhost',
    port: 5432,
    database: 'neoathenaeum',
    user: 'postgres',
    password: '12345678'
});

module.exports = conn;