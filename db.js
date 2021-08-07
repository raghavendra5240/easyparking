const mongoose = require('mongoose');

var mongoURL = "mongodb+srv://raghu:raghu123@cluster0.zrgrh.mongodb.net/easyparking"

mongoose.connect(mongoURL , {useUnifiedTopology : true , useNewUrlParser:true})

var connection = mongoose.connection

connection.on('error', ()=>{
    console.log("Mongo DB Connection failed")
})

connection.on("connected", ()=>{
    console.log("mongodb connection established")
})

module.exports = mongoose