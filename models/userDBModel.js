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
    gender:String,
    status:String
})

const UserDB = mongoose.model("userdb",schema);

module.exports = UserDB;