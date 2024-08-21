const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    type:String,
    status:String
})

const productDB = mongoose.model("productdb",schema);

module.exports = productDB;