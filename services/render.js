
exports.homeRoutes = (req, res)=>{
    res.render("index", { title: "CRM System" });
}

exports.update_Employee = (req, res)=>{
    res.render("update_Employee");
}

exports.addEmployee = (req, res)=>{
    res.render("addEmployee");
}