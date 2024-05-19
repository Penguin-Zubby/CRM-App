
exports.homeRoutes = (req, res)=>{
    res.render("index", { title: "CRM Cystem" });
}

exports.update_Employee = (req, res)=>{
    res.render("update_Employee");
}

exports.addEmployee = (req, res)=>{
    res.render("addEmployee");
}