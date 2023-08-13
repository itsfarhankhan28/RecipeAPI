const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 5000
const router = require('./route/route')

app.use(express.json())
app.use(cors())
app.use('/recipe',router)

app.get('/',(req,res)=>{
    res.send("This is the recipe api")
})

app.listen(PORT , ()=>{
    console.log(`listening to port ${PORT}`)
})