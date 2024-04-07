const mongoose = require("mongoose");
require("dotenv").config();

const DB = process.env.DB;

module.exports = () => {
  try {
    mongoose.connect(DB).then(() => {
      console.log("Connected to database successfully");
    });
  } catch (error) {
    console.log(error);
    console.log("Could not connect database!");
  }
};
