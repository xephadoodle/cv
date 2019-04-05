//jshint esversion:6

const express = require("express");

const app = express();

app.get("/", function(req, res) {
  res.send("Hello");
});

app.get("/contact", function(req, res) {
  res.send("Contact me at name@domain.com");
});

app.get("/about", function(req, res) {
  res.send("My name is jason, and I do stuff");
});

app.get("/*", function(req, res) {
  res.send("404 error");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
