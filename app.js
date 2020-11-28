const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const https = require("https");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.get("/", (req, res) => {
	res.sendFile(__dirname + "/signUp.html");
	console.log("app started on port 5000");
	
});
app.post("/", (req, res) => {
	let firstName = req.body.fname;
	let lastName = req.body.lname;
	let email = req.body.email;
	console.log(firstName,lastName,email);
});
// 4059e8b97946277129d678c379259cca-us7



app.listen(5000, () => {
	console.log("app is running on port now");
	
});

