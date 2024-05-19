var express = require("express");
var router = express.Router();

const services = require("../services/render");

/** 
 * @description index route
 * @method GET/
*/
/* GET home page. */
router.get("/", services.homeRoutes)

module.exports = router;
