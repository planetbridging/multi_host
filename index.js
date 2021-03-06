var express = require("express");
const https = require("https");
const fs = require("fs");
var subdomain = require("express-subdomain");
var app = express();
var router = express.Router(); //main api router

//oauth 1.0 flick bridge

const crypto = require("crypto");
const OAuth = require("oauth-1.0a");
const request = require("request");

var flutter = express.Router();
var griffith = express.Router();
var angular = express.Router();
var api = express.Router();
var flickr = express.Router();

var checkUser = function (req, res, next) {
  if (!req.session.user.valid) {
    return res.send("Permission denied.");
  }
  next();
};

//the api middleware flow
//router.use(checkUser);

//flutter projects exported
app.use(
  subdomain("*.japres", express.static(__dirname + "/projects/flutter/japres"))
);

app.use(
  subdomain("*.holiday", express.static(__dirname + "/projects/griffith/2702ict/exercises/assignment1/"))
);

app.use(
  subdomain("*.security", express.static(__dirname + "/projects/simple/security/"))
);

app.use(
  subdomain("*.shannon", express.static(__dirname + "/projects/shannon/"))
);

//griffith
griffith.use(
  subdomain(
    "*.2702ict",
    express.static(__dirname + "/projects/griffith/2702ict")
  )
);

//angular projects exported
app.use(
  subdomain(
    "*.turnjs",
    express.static(__dirname + "/projects/angular/turnjs_angular")
  )
);

//router.use(subdomain("*.v2", v2Routes));

//basic routing..
/*api.get("/", function (req, res) {
  res.send("Welcome to the API!");
});*/

//--------------flickr api middle

function hash_function_sha1(base_string, key) {
  return crypto.createHmac("sha1", key).update(base_string).digest("base64");
}

flickr.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept,authtoken"
  );
  next();
});

flickr.get("/", function (req, res) {
  //res.send("API - version 1");
  const oauth = OAuth({
    consumer: {
      //key: "99872428c9a3629cc7186481eebd04fd",
      //secret: "3805e33e71aa0435",
      key: req.query.key,
      secret: req.query.secret,
    },
    signature_method: "HMAC-SHA1",
    hash_function: hash_function_sha1,
  });

  const request_data = {
    url: "https://www.flickr.com/services/oauth/request_token",
    method: "POST",
    data: {
      oauth_callback: "http://example.com",
    },
  };

  request(
    {
      url: request_data.url,
      method: request_data.method,
      form: oauth.authorize(request_data),
    },
    function (error, response, body) {
      // Process your data here
      //console.log(response);
      //console.log("---------");
      //console.log(body);
      res.send(body);
    }
  );
});

/*app.get('*', function(req, res) {  
  res.redirect('https://' + req.headers.host + req.url);
});*/

app.use(function(req,res,next) {
  if (!/https/.test(req.protocol)){
     res.redirect("https://" + req.headers.host + req.url);
  } else {
     return next();
  } 
});

//attach the api
app.use("/", express.static(__dirname + "/projects/angular/pressback.space"));
//app.use(express.static(__dirname + "/UI"));
app.use(subdomain("griffith", griffith));
app.use(subdomain("flutter", flutter));
app.use(subdomain("angular", angular));
api.use(subdomain("flickr", flickr));
app.use(subdomain("api", api));
//app.listen(9999);

/*var key = fs.readFileSync("/etc/letsencrypt/live/pressback.space/privkey.pem");
var cert = fs.readFileSync(
  "/etc/letsencrypt/live/pressback.space/fullchain.pem"
);*/
var key = fs.readFileSync(
  "/etc/letsencrypt/live/pressback.space-0001/privkey.pem"
);
var cert = fs.readFileSync(
  "/etc/letsencrypt/live/pressback.space-0001/fullchain.pem"
);
var options = {
  key: key,
  cert: cert,
};

var server_https = https.createServer(options, app);
app.listen(80);
server_https.listen(443, function () {
  console.log("server running at 443");
});
