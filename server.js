const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/Product.js");

const app = express();

app.use(express.json());

//routes
app.get("/", (req, res) => {
  res.send("Maincra");
});

app.get("/products", async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/product", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
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
