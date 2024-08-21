var express = require("express");
var router = express.Router();

const services = require("../services/render");
const controller = require("../controller/userController");

/** 
 * @description Home route
 * @method GET/
*/
/* GET home page. */
router.get("/", services.homeRoutes)

/** 
 * @description Add Employee route
 * @method GET/add-employee
*/
/* Add new employee details */
router.get("/",services.addEmployee);

/** 
 * @description Update employee route
 * @method GET/update-employee
*/
/*Update employee details */
router.get("/", services.update_Employee);

//Setting APIs
route.post("/api/users", controller.create);
route.get("/api/users", controller.find);
route.put("/api/users/:id", controller.update);
route.delete("/api/users/:id", controller.delete);

module.exports = router;
