const router = require("express").Router();
const cryptoJS = require("crypto-js");
const User = require("../models/user");
// const { authorize } = require('./middle/auth');
const jwt = require("jsonwebtoken");

router.post("/", async (req, res, next) => {
  const user = await User.findOne({ username: req.body.name });

  //wrong User-name
  !user && res.status(401).json("wrong credential ");

  //decrypting password
  var bytes = cryptoJS.AES.decrypt(user.password, "key");
  var pass = bytes.toString(cryptoJS.enc.Utf8);

  //correcct password
  if (pass === req.body.password) {
    console.log(" Of course I waited for you 💗");

    // const token = jwt.sign(user.toString(), "key");

    // //saving token in body for further use
    // req.token = token;

    //response
    return res.status(200).json("Login successful");
    // res.redirect('http://localhost:3000/');
  } else {
    console.log(" blyat");
    res.json("NO MIKEY NO NO >>>>> ");
  }
});

module.exports = router;
