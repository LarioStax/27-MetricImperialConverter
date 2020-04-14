const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const chai = require("chai");
const expect = chai.expect;


const cors = require("cors");
app.use(cors());

app.use("/public", express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
	res.sendFile(process.cwd() + "/views/index.html");
})

const port = process.env.PORT || 3000;
app.listen(port, function() {
	console.log("Listening on port " + port + "!");
});