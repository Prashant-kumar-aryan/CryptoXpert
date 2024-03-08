const router = require('express').Router();
const cryptoJS = require('crypto-js');
const user = require('../models/user');

router.post('/', async (req, res) => {

    // console.log(req.query, req.body)
    const newUser = new user({
        username: req.body.name,
        email: req.body.mail,
        password: cryptoJS.AES.encrypt(req.body.password, 'key').toString(),
    })
    // const newUser = new user({
    //     username: req.query.name,
    //     email: req.query.mail,
    //     password: cryptoJS.AES.encrypt(req.query.password, 'key').toString(),
    // })
    try {
        const savedUser = await newUser.save();
        console.log('yes');
        res.json("yes");
    }
    catch (err) {
        console.log("-------------------blyat------------------------", err);
        res.status(500).json(err);
    }
});
module.exports = router;