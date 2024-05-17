var express = require("express");
var router = express.Router();

const userData = [
  { username: "bob23@gmail.com", password: "abv123" },
  { username: "mandy12@gmail.com", password: "123abv" },
];

function checkUserAndPass(username, password) {
  if (userData.find((user) => user.username === username)) {
    if (userData.find((user) => user.password === password)) {
      return true;
    }
  }
}

//setting routers
router.post("/", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  //checking the credentials and sending response back to client side
  if (checkUserAndPass(username, password)) {
    req.session.isAuthenticated = true;
    res.redirect("/userHome");
  } else {
    req.session.flash = {
      type: "error",
      message: "Username or password is incorrect",
    };
    res.redirect("/login");
  }
});

router.get("/", function (req, res) {
  let userMessageType = null;
  let userMessage = null;
  if (req.session.flash) {
    userMessageType = req.session.flash.type;
    userMessage = req.session.flash.message;
    req.session.flash = "";
  }
  res.render("login", { title: "Login", userMessageType, userMessage });
});

module.exports = router;
