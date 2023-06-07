
const express = require('express');
const database = require("../dbPool");
const moment = require("moment");
const router = express.Router();

const jwt = require ('jsonwebtoken');


router.get('/', async function(req, res) {
    if (!req.headers.authorization) {
        res.status(401).json({message: "Unauthorized"});
	return;
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
    }

});


router.get('/get-events', async (req, res) => {
    try {
        const result = await database.pool.query(
            `SELECT tablerdv.rdvID, tablerdv.clientID, tablerdv.rdvCom, tablerdv.rdvDate, tablerdv.rdvHeure, tablerdv.service, CONCAT(tableclients.clientPrenom, ' ', tableclients.clientNom) AS clientNom 
      FROM tablerdv 
      INNER JOIN tableclients ON tablerdv.clientID = tableclients.clientID`
        );

        res.json(result);
        console.log(result);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

router.get('/get-clients', async (req, res) => {
    try {
        const result = await database.pool.query(
            `SELECT DISTINCT clientID, CONCAT(clientPrenom, ' ', clientNom) AS clientNom 
      FROM tableclients`
        );

        res.json(result);
        console.log(result);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

router.post('/create-event', async (req, res) => {
  try {
      const { clientID, rdvCom, rdvDate, rdvHeure, service } = req.body;

      const result = await database.pool.query(
          'INSERT INTO main_db.tablerdv(clientID, rdvCom, rdvDate, rdvHeure, service) VALUES (?, ?, ?, ?, ?)',
          [clientID, rdvCom, rdvDate, rdvHeure, service]
      );

      res.sendStatus(201);

  } catch (err) {
      console.log(err);
      res.status(500).json({ error: err.message });
  }
});

router.delete('/delete-event/:rdvID', async (req, res) => {
    try {
        const eventId = req.params.rdvID;
        // Implement your delete event logic here
        await database.pool.query('DELETE FROM main_db.tablerdv WHERE rdvID = ?', [eventId]);


        res.sendStatus(200);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});



module.exports = router;
