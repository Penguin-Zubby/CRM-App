var express = require("express");
var router = express.Router();
var services = require("../services/render");

/* Add new employee details */
router.get("/",services.add_employee);

module.exports = router;
