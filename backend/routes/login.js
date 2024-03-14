const router = require("express").Router();
const cryptoJS = require("crypto-js");
const User = require("../models/user");
// const { authorize } = require('./middle/auth');
const jwt = require("jsonwebtoken");

router.post("/", async (req, res) => {
  const user = await User.findOne({ username: req.body.name });
  
  //wrong User-name

  if(!user)
    res.json("Username Incorrect!");
  else
  {
    //decrypting password
    var bytes = cryptoJS.AES.decrypt(user.password, "key");
    var pass = bytes.toString(cryptoJS.enc.Utf8);

    //correcct password
    if (pass === req.body.password) {
      console.log("Login Successful");
      //response
      res.json("Login Successful");

      // const token = jwt.sign(user.toString(), "key");

      // //saving token in body for further use
      // req.token = token;

    } else {
      console.log("Password Incorrect");
      res.json("Password Incorrect");
    }
  }
});

module.exports = router;
