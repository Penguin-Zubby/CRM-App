const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true,
    },
    gender:String
})

const customerDB = mongoose.model("customerdb",schema);

module.exports = customerDB;