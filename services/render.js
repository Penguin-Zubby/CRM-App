const axios =require("axios");
const { response } = require("express");

exports.homeRoutes = (req, res)=>{
    res.render("index", { title: "CRM System" });
}

exports.employeelList =(req,res)=>{
    axios.get("http://localhost:3100/api/users")
     .then(function(response){
        res.render("employee", {users:response.data});
     })
    
}

exports.update_Employee = (req, res)=>{
    axios.get("http://localhost:3100")
    res.render("update_Employee");
}

exports.addEmployee = (req, res)=>{
    axios.get("http://localhost:3100")
    res.render("addEmployee");
}