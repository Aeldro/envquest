const express = require("express");
require("dotenv").config();
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send(
    `I am ${process.env.MY_NAME}, wilder in ${process.env.MY_CITY}, and I love ${process.env.MY_LANGUAGE}.`
  );
});

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${port}`);
  }
});
