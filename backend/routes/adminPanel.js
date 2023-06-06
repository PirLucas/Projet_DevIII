
const express = require('express');
const database = require("../dbPool");
const moment = require("moment");
const router = express.Router();

const jwt = require ('jsonwebtoken');


router.get('/', async function(req, res) {
    if (!req.headers.authorization) {
        res.status(401).json({message: "Unauthorized"});
        res.send('Unauthorized');
    }

    // Bearer <token>>
    const authHeader = req.headers.authorization;
    const token = authHeader.split(" ")[1];

    try {
        // Verify the token is valid
        jwt.verify(token, process.env.JWT_SECRET);
        res.status(200).json({message: "Welcome to the admin panel"});

    } catch (error) {
        res.status(401).json({message: "Unauthorized"});
        res.send('Unauthorized');
    }

});


router.get('/get-events', async (req, res) => {
  try {
      const rdvStart = moment(req.query.start).format('YYYY-MM-DD HH:mm:ss');
      const rdvEnd = moment(req.query.end).format('YYYY-MM-DD HH:mm:ss');

      const result = await database.pool.query('SELECT tablerdv.rdvCom, tablerdv.rdvDate, tablerdv.rdvHeure, tableclients.clientNom FROM tablerdv INNER JOIN tableclients ON tablerdv.clientID = tableclients.clientID');
      res.json({result});
      console.log(result);
  } catch (err) {
      console.log(err);
  }
});

router.post('/create-event', async (req, res) => {
  try {
    const clientID = req.body.extendedProps.clientID;
    const rdvCom = req.body.rdvCom;
    const rdvDate = req.body.rdvDate;
    const end = req.body.rdvHeure;
    const result = await database.pool.query('INSERT INTO main_db.tablerdv(clientID, rdvCom, rdvDate, rdvHeure) values (?, ?, ?, ?)', [clientID, rdvCom, rdvDate, rdvHeure]);
      res.sendStatus(201);
  } catch (err) {
      console.log(err);
      res.status(500).json({ error: err.message });
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
