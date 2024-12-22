const { Pool } = require("pg");

const pool = new Pool({
    user: "postgres",
    password: "sofien",
    host: "localhost",
    port: 5432,
    database: "user_data"
});

module.exports = pool;
