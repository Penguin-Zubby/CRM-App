const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    address:{
        type:String,
        type:String,
        type:String,
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
    gender:String,
    status:String
})

const companyDB = mongoose.model("companydb",schema);

module.exports = companyDB;