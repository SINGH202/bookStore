const express = require("express");
const mongoose = require("mongoose");
  const dotenv = require("dotenv")
const app = express();
const userController = require("./controllers/user.controller")
const bookController = require("./controllers/books.controller")
dotenv.config();

  app.use(express.json())

  app.use("/api", userController)
  app.use("/api", bookController)



module.exports = app;
