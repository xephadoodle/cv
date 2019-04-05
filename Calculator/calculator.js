//jshint esversion:6

const express = require("express");
const bobyParser = require("body-parser");

const app = express();
app.use(bobyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/bmicalculator", function(req,res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.get("/*", function(req, res) {
  res.send("404 error: file not found.");
});

app.post("/", function (req, res) {
  var number1 = parseInt(req.body.num1);
  var number2 = parseInt(req.body.num2);
  res.send("The sum of " + number1 + " and " + number2 + " is " + (number1 + number2));
  console.log(req.body);
});

app.post("/bmicalculator", function(req,res) {
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);
  var bmi = weight / (height * height);
  res.send("Your BMI is " + bmi);
});

app.listen(3000, function() {
  console.log("Express Server Started and Listening on port 3000");
});
