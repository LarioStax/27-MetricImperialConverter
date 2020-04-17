const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const chai = require("chai");
const expect = chai.expect;
const dotenv = require("dotenv").config();
const helmet = require("helmet");

const routes = require("./routes/api.js");
const fccTestingRoutes = require("./routes/fcctesting.js");
const runner = require("./test-runner");


const cors = require("cors");
app.use(cors());

app.use("/public", express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
	res.sendFile(process.cwd() + "/views/index.html");
})

fccTestingRoutes(app);

routes(app);

//404 Not Found Middleware
app.use(function(req, res, next) {
  res.status(404)
    .type('text')
    .send('Not Found');
});

const port = process.env.PORT || 3000;
app.listen(port, function() {
	console.log("Listening on port " + port + "!");
  if(process.env.NODE_ENV==='test') {
    console.log('Running Tests...');
    setTimeout(function () {
      try {
        runner.run();
      } catch(e) {
        var error = e;
          console.log('Tests are not valid:');
          console.log(error);
      }
    }, 1500);
  }
});

module.exports = app; //for testing
