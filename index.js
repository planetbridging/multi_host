var express = require("express");
var subdomain = require("express-subdomain");
var app = express();
var router = express.Router(); //main api router
var v1Routes = express.Router();
var v2Routes = express.Router();

v1Routes.get("/", function (req, res) {
  res.send("API - version 1");
});
v2Routes.get("/", function (req, res) {
  res.send("API - version 2");
});

var checkUser = function (req, res, next) {
  if (!req.session.user.valid) {
    return res.send("Permission denied.");
  }
  next();
};

//the api middleware flow
//router.use(checkUser);
router.use(subdomain("*.japres", express.static(__dirname + "/japres")));
router.use(subdomain("*.v2", v2Routes));

//basic routing..
router.get("/", function (req, res) {
  res.send("Welcome to the API!");
});

//attach the api
app.use(subdomain("api", router));
app.listen(9999);
