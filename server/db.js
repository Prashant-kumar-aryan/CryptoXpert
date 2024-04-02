const mongoose = require("mongoose");

const DB = "mongodb://127.0.0.1:27017/loginpage";

module.exports = () => {
  try {
    mongoose.connect(DB);
    console.log("Connected to database successfully");
  } catch (error) {
    console.log(error);
    console.log("Could not connect database!");
  }
};
