const express = require("express");
const cors = require("cors");

const app = express();

const portNumber = process.env.PORT || 3000;

app.use(cors());

app.use(express.static(__dirname + "/template" , {index: 'landing.html'}));

// app.use(express.static(__dirname + "/static"));

app.listen(portNumber, function () {
  console.log(`Connected to localhost: ${portNumber}`);
});
