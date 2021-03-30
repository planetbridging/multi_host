var express = require("express");
var subdomain = require("express-subdomain");
var app = express();
var router = express.Router(); //main api router
var flutter = express.Router();
var griffith = express.Router();
var angular = express.Router();
//var v1Routes = express.Router();
//var v2Routes = express.Router();

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

//flutter projects exported
flutter.use(
  subdomain("*.japres", express.static(__dirname + "/projects/flutter/japres"))
);

//griffith
griffith.use(
  subdomain(
    "*.2702ict",
    express.static(__dirname + "/projects/griffith/2702ict")
  )
);

//angular projects exported
angular.use(
  subdomain(
    "*.turnjs_angular",
    express.static(__dirname + "/projects/angular/turnjs_angular")
  )
);

//router.use(subdomain("*.v2", v2Routes));

//basic routing..
router.get("/", function (req, res) {
  res.send("Welcome to the API!");
});

//attach the api
app.use(subdomain("griffith", griffith));
app.use(subdomain("flutter", flutter));
app.use(subdomain("angular", angular));
app.listen(9999);
