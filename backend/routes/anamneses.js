var express = require('express');
var router = express.Router();
const database = require("../dbPool");

router.get('/', async function(req, res, next) {

  console.log(Object.keys(req.query)[0])

  if (! Object.keys(req.query)[0]){
    try {

      const result = await database.pool.query(`select * from tableanamneses right join tableclients USING (clientID)`);
      rep = result
      res.json({rep});

    } catch (err) {
      console.log(err);
    }
  }

  else if(Object.keys(req.query)[0] == "clientID") {
    try {
      console.log(Object.keys(req.query)[0])
      const result = await database.pool.query(`select * from tableanamneses where clientID = ${req.query.clientID}`);
      rep = result
      res.json({rep});

    } catch (err) {
      console.log(err);
    }
  }
});
                    //, fction de vérification du token, async.....
router.post('/', async function(req, res, next) {
  try {
    //const result = await database.pool.query(`insert into main_db.tabletemoignages(clientID, contenu, date) values(${clientID}, "${req.body.contenu}", "${date}") `);
    query = `INSERT INTO main_db.tableanamneses(clientID, contenu) values(?, ?) `

    const result = await database.pool.query(query, [req.query.clientID, req.body.contenu])
  } catch (err) {
    throw err;
  }
  console.log(req.query.clientID)
  res.json({rep : `Le témoignage est enregistré et est en attente d'approbation`});
  return
});

router.put('/', async function(req, res, next) {
  //res.json({rep : req.query.clientID});
  try {
    //const result = await database.pool.query(`insert into main_db.tabletemoignages(clientID, contenu, date) values(${clientID}, "${req.body.contenu}", "${date}") `);
    query = `UPDATE main_db.tableanamneses SET contenu = ? WHERE clientID = ?`

    const result = await database.pool.query(query, [req.body.contenu, req.query.clientID])
  } catch (err) {
    throw err;
  }
  console.log(req.query.clientID)
  res.json({rep : `Le témoignage est enregistré et est en attente d'approbation`});
  return
});

module.exports = router;
