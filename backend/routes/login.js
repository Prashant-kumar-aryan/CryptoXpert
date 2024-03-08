const router = require('express').Router();
const cryptoJS = require('crypto-js');
const User = require('../models/user');
// const { authorize } = require('./middle/auth');
const jwt = require('jsonwebtoken');


router.post('/', async (req, res, next) => {
    console.log(req.body);
    const user = await User.findOne({ username: req.body.name });

    //wrong User-name 
    !user && res.status(401).json("wrong credential ");

    //decrypting password
    var bytes = cryptoJS.AES.decrypt(user.password, "key");
    var pass = bytes.toString(cryptoJS.enc.Utf8);

    //correcct password
    if (pass === req.body.password) {

        // console.log('correct');
        const token = jwt.sign(user.toString(), "key");
        // console.log(token);

        //saving token in body for further use
        req.token = token;
        // authorize(req, res, next);
        console.log("Champu");
        //response
        // res.status(201).redirect('http://localhost:3000/home');
        res.json("yes SIR ")
    }

    else {
        console.log(' blyat')
        res.json("NO MIKEY NO NO >>>>> ")
    }


})

module.exports = router;