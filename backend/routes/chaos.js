const router = require('express').Router();
let fetch;
import('node-fetch').then(nodeFetch => {
    fetch = nodeFetch;
    // rest of your code
});
// const fetch = require('node-fetch');
router.get('/', async (req, res, next) => {
    console.log("Welcome to Dark Side ")

    const url = 'https://api.coingecko.com/api/v3/ping';
    const options = { method: 'GET' };

    fetch(url, options)
        .then(res => res.json())
        .then(json => console.log(json))
        .catch(err => console.error('error:' + err));
})



module.exports = router;