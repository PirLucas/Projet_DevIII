
const express = require('express');
const database = require("../dbPool");
const moment = require("moment");
const router = express.Router();

router.get('/', async function(req, res, next) {

  console.log(Object.keys(req.query)[0])
  if(Object.keys(req.query)[0] == "clientID") {
    try {

      const result = await database.pool.query(`select * from tablerdv where rdvID = ${req.query.clientID}`);
      valeur = result
      res.json({valeur});
    } catch (err) {
      console.log(err);
    }
  }
  else if(Object.keys(req.query)[0] == "rdvDate") {
    try {



// Display the result
      console.log(req.query.rdvDate)
      const result = await database.pool.query(`select rdvDate from tablerdv`);
      valeur = result
      console.log(result)
      res.json({valeur});
    } catch (err) {
      console.log(err);
    }

  }
});

/*
router.put('/', async function(req, res, next) {
  res.send(`${req.query.anamneseID}`);
});

router.delete('/', function(req, res, next) {
  res.send(`${req.query.anamneseID}`);
});
*/




module.exports = router;
