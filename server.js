const express = require('express')
const mongoose =require('mongoose')
const app = express()
const persons_routes = require('./routes/persons.js')
require ('dotenv').config()

mongoose.connect(process.env.MONGO_URI)
.then(() =>  console.log("server connected") )
.catch(()=>console.log("error connexion")) 

app.use(express.json())
app.use('/api/persons', persons_routes)
app.listen(5000, ()=> {
console.log("server is running at port  5000")
});