const express = require("express");
const mongoose = require("mongoose");

const app = express();
const userController = require("./controllers/user.controller")
const bookController = require("./controllers/books.controller")

mongoose
  .connect("mongodb+srv://singh202:Anurag1234@cluster0.bxefk.mongodb.net/books")
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log(err);
  });

  app.use(express.json())

  app.use("/api", userController)
  app.use("/api", bookController)

  app.listen(2345, () =>{
      console.log("Connected to port 2345")
  })