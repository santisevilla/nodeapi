const express = require("express");
const mongoose = require("mongoose");
const app = express();

//routes
app.get("/", (req, res) => {
  res.send("Maincra");
});

mongoose
  .connect(
    "mongodb+srv://admin:admin@node.sue0zbj.mongodb.net/Node?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("connected to MongoDB");
    app.listen(3001, () => {
      console.log("Running");
    });
  })
  .catch(() => {
    console.log(error);
  });
