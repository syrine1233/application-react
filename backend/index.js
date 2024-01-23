const express = require('express')
const mongoose = require ('mongoose')
const cors = require ('cors')
const ClientModel = require('./models/client')

const app=express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/client");

app.post('/register',(req, res) =>{
ClientModel.create(req.body)
.then(client => res.json(client))
.catch(err => res.json(err))
})

app.listen(3001, () =>{
    console.log('server is running')
} )