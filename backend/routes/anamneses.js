var express = require('express');
const database = require("../dbPool");
var router = express.Router();


router.get('/', async function(req, res, next) {
  try {
    const result = await database.pool.query(`select contenu from table_test where ID = ${req.query.clientID}`);
    valeur = result
    res.json({ valeur });
  } catch (err) {
    throw err;
  }
  //res.send(`${req.query.clientID}`);
});

router.post('/', async function(req, res, next) {
  try {
    const result = await database.pool.query(`insert into main_db.tableanamneses(clientID, contenu) values(${req.query.clientID}, "${req.body.contenuBody}") `);
  } catch (err) {
    throw err;
  }
  res.send(`${req.query.clientID}`);
});

router.put('/', async function(req, res, next) {
  res.send(`${req.query.anamneseID}`);
});

router.delete('/', function(req, res, next) {
  res.send(`${req.query.anamneseID}`);
});

module.exports = router;
