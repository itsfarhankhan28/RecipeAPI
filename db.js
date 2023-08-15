require('dotenv').config();

const POOL = require('pg').Pool

const pool = new POOL({
    // user: process.env.DB_USER,
    // password: process.env.DB_PASSWORD,
    // host: process.env.DB_HOST,
    // port: process.env.DB_PORT,
    // database: process.env.DB_NAME
    connectionString:process.env.INTERNAL_URL
})

module.exports = pool