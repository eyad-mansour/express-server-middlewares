"use strict";

const express = require("express");
const app = express();
const cors = require("cors");

const square = require("./middleware/validate-number");

const errorHandler = require("./error-handlers/500");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("hi it is me eyad");
});

app.get("/square", square(25), (req, res) => {
  res.status(200).send(`The number is: ${req.myNumber}`);
});

app.use(errorHandler);

function start(port) {
  app.listen(port, () => console.log(`server is up and awake ${port}`));
}

module.exports = {
  app: app,
  start: start,
};
