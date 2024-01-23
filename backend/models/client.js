const mongoose = require('mongoose')

const ClientSchema = new mongoose.Schema({
    name : String,
    email:String,
    password:String
})

const ClientModel = mongoose.model("client",ClientSchema)
module.exports = ClientModel