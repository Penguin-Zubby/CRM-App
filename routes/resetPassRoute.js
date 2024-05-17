var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("resetPassword", { title: "Reset Password" });
});

module.exports = router;
