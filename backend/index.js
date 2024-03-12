const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect('mongodb+srv://dark:darkrino@cluster0.jeqnbtu.mongodb.net/crypto')
    .then(() => { app.listen(4000, () => { console.log('----------listening on--------'); }); })
    .catch(err => { console.error(err); });


const register = require('./routes/register');
app.use('/register', register);

const login = require('./routes/login');
app.use('/login', login);

const chaos = require('./routes/chaos');
// import chaos from './routes/chaos'
app.use('/chaos', chaos);