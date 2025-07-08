const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const morgan = require("morgan");

mongoose.connect("mongodb://localhost:27017/mydatabase");

mongoose.Promise = global.Promise;

const app = express();

app.use(bodyParser.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.status(200).send("API is running");
});

app.use("/api/users", require("./routes/users"));
app.use("/api/blogs", require("./routes/blogs"));

module.exports = app;
