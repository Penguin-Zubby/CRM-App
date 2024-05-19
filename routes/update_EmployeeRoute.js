var express = require("express");
var router = express.Router();
const services = require("../services/render");

/*Update employee details */
router.get("/", services.update_Employee);

module.exports = router;