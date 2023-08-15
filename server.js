const express = require('express')
const app = express()
require('dotenv').config();
const cors = require('cors')
const router = require('./api/route')

app.use(express.json())
app.use(cors())
app.use('/recipe',router)

app.get('/',(req,res)=>{
    res.send("This is the recipe api")
})

app.listen(process.env.PORT , ()=>{
    console.log(`listening to port ${process.env.PORT}`)
})