require('dotenv').config();

const POOL = require('pg').Pool

const pool = new POOL({
    connectionString: process.env.POSTGRES_URL + "?sslmode=require",
})

pool.connect((err)=>{
    if(err) throw err
    console.log("connected successfully to PostgreSQL Database")
})

module.exports = pool