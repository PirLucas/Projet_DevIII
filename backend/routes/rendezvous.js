
const express = require('express');
const database = require("../dbPool");
const moment = require("moment");
const router = express.Router();

router.get('/', async function(req, res, next) {

  console.log(Object.keys(req.query)[0])

  if(Object.keys(req.query)[0] == "clientID") {

    try {
      let valeur = await database.pool.query(`select * from tablerdv where rdvID = ${req.query.clientID}`);
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


router.post('/', async function(req, res, next) {

  try {
    const result = await database.pool.query(`select clientID from tableclients where mail = "${req.query.email}"`);
    if (result.length == 0) {
      try {
        let query = `insert into tableclients(clientNom, clientPrenom, clientGSM, mail) values(?, ?, ?, ?)`
        await database.pool.query(query, [req.body.nom, req.body.prenom, req.body.tel, req.body.email])
        }
        catch (err) {
          res.json({rep :"Erreur lors de la création du client"});
          return;
        }
        try {
        const result = await database.pool.query(`select clientID from tableclients where mail = "${req.query.email}"`);
        clientID = result[0].clientID
        }
        catch (err) {
          res.json({rep :"Erreur lors de la vérification de l'exitense du client"});
          return;
        }
    }
    else {
      clientID = result[0].clientID
    }
  }
  catch (err) {
      res.json({rep :"Erreur lors de la vérification de l'exitense du client"});
      return;
  }

  try {
    let memeRdv = await database.pool.query(`select * from tablerdv where rdvDate = "${req.body.date}" and rdvHeure = "${req.body.heure}" and service = "${req.body.service}"`);
    if (memeRdv.length == 0) {
      try {
        let query = `insert into tablerdv(clientID, rdvDate, rdvHeure, service) values (?, ?, ?, ?)`
        await database.pool.query(query, [clientID, req.body.date, req.body.heure, req.body.service]);
      }
      catch (err) {
        res.json({rep :"Erreur lors de la création du rendez-vous"});
        return;
      }
      res.json({rep : `Le rendez-vous est enregistré`});
    }
    else {
      res.json({rep : `Le rendez-vous est déjà pris`});
    }
  }
    catch (err) {
      res.json({rep :"Erreur lors de la vérification de l'exitense du rendez-vous"});
    }

});

router.delete('/', function(req, res, next) {
  res.send(`${req.query.anamneseID}`);
});





module.exports = router;
