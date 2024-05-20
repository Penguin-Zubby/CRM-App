const UserDB = require("../models/userDBModel");

//create and save new employee
exports.create = (req,res) =>{
    //validate user request
    if(!req.body){
        res.status(400).send({message:"Content can not be empty."})
        return;
    }
    //new employee
    const user = new UserDB({
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        address:req.body.address,
        gender:req.body.gender,
        status:req.body.status
    })

    //save employee details
    user
      .save(user)
      .then(data => {
        req.send(data)
      })
      .catch(err =>{
        res.status(500).send({
            message: err.message || "Some error occured while saving employee details."
        });
       });
}

//retrive and return all employees/ one employee
exports.find = (req,res) =>{
    if (req.query.id){
        const id = req.query.id;
        UserDB.findById(id)
         .then(data =>{
            if(!data){
                res.status(404).send({message:"Employyee with id $(id) not found."})
            }else{
                res.send(data)
            }
         })
         .catch(err =>{
            res.status(500).send({message: "Error retrieving employee with id $(id)."})
         })
    }else(
        UserDB.find()
    .then(user =>{
        res.send(user)
    })
    .catch(err =>{
        res.status(500).send({message: err.message || "Error occured while retrivinf Employee details."})
    })
    )
}

//update a employee by employee id
exports.update = (req,res) =>{
    if(req.body){
        return res
         .status(400)
         .send({message:"Details of employee cannot be empty."})
    }
    const id = req.params.id;
    UserDB.findByIdAndUpdate(id.req.body, {useFindAndModify:false})
      .then(data => {
        if(data){
            res.status(404).send({message : "Cannot update employee with ${id}. Maybe Employee not found"})
        }else{
            res.send(data)
        }
        })
        .catch(err => {
            res.status(500).send({message: "Error update user information"})
        })
}


//delete a employee using employee id
exports.delete = (req,res) =>{
    const id = req.params.id;

    UserDB.findByIdAndDelete(id)
     .then(data =>{
        if(!data){
            res.status(404).send({message: "Connot delete with id $(id). Maybe id is wrong"})
        }else{
            res.send({
                message:"Employee was deleted successfully."
            })
        }
     })
     .catch(err =>{
        res.status(500).send({
            message:"Could not delete employee with id $(id)."
        })
     })
}