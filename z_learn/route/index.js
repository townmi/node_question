var express = require('express');
var app = express();
var router = express.Router();

// exports
module.exports = router;

router.get("/", function (req, res){

	res.render("index")

})

router.get("/login", function (req, res){

	res.render("login");

});

router.get("/reg", function (req, res){

	res.redirect("/");

});

router.post("/reg", function (req, res, next){

	// console.log(req.body);

	// next();

	// res.redirect("/");

	res.send({"login" : true});

	

})