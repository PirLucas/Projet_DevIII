var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.send(`${req.query.clientID}`);
});

router.get('/', function(req, res, next) {
  res.send(`${req.query.rdvDate}`);
});

router.post('/', function(req, res, next) {
  res.send(`${req.query.rdvDate}`);
});

module.exports = router;
