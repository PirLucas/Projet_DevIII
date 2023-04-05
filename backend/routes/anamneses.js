var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.send(`${req.query.clientID}`);
});

router.post('/', function(req, res, next) {
  res.send(`${req.query.clientNom}`);
});

router.put('/', function(req, res, next) {
  res.send(`${req.query.anamneseID}`);
});

router.delete('/', function(req, res, next) {
  res.send(`${req.query.anamneseID}`);
});

module.exports = router;
