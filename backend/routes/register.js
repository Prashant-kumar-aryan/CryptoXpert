const router = require("express").Router();
const cryptoJS = require("crypto-js");
const user = require("../models/user");

router.post("/", async (req, res) => {
  const newUser = new user({
    username: req.body.name,
    email: req.body.mail,
    password: cryptoJS.AES.encrypt(req.body.password, "key").toString(),
    confpass: cryptoJS.AES.encrypt(req.body.password, "key").toString(),
  });

 
  try {
    const savedUser = await newUser.save();
    return res.status(200).json("Registration Successful");
  } catch (err) {
    console.log(" Private ! No connection established❕");
    console.log(err);
    return res.json("Registration Failed!");
    
  }
});

module.exports = router;
