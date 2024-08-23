var express = require("express");
var app = express();

app.use("/",express.static("./FE"))

app.listen(8080)