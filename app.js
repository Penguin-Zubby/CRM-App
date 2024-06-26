var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const session = require("express-session");
const dotenv = require("dotenv");

dotenv.config();

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var loginRouter = require("./routes/loginRoute");
var registerRouter = require("./routes/registerRoute");
var resetPassRouter = require("./routes/resetPassRoute");
var adminRouter = require("./routes/adminRoute");
var legalsRouter = require("./routes/legalRoute");
var dashboardRouter = require("./routes/dashboardRoute");
var registerComRouter = require("./routes/registerComRoute");


const connectdb = require("./mongoDB/mongodb");

var app = express();
app.set("trust proxy", 1);
app.use(
  session({
    secret: "flying-turtles",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);
//Moogoose Database connection
connectdb();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/login", loginRouter);
app.use("/register", registerRouter);
app.use("/resetPassword", resetPassRouter);
app.use("/admin", adminRouter);
app.use("/legals", legalsRouter);
app.use("/registerCom", registerComRouter);

app.use("/dashboard", dashboardRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
