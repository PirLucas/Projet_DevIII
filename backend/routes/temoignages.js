var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    res.send(`${req.query.clientID}`);
});

router.delete('/', function(req, res, next) {
    res.send(`${req.query.clientID}`);
});

router.post('/', function(req, res, next) {
    res.send(`${req.query.clientID}`);
});

module.exports = router;
