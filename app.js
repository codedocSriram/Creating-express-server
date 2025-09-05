const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200).send(`<h1>Welcome to homePage!</h1>`);
});

app.listen(5000, () => {
  console.log("Server is up and running!");
});
