
const express = require('express');
const database = require("../dbPool");
const moment = require("moment");
const router = express.Router();

router.get('/api/calendar/get-events', async (req, res) => {
  try {
      const rdvStart = moment(req.query.start).format('YYYY-MM-DD HH:mm:ss');
      const rdvEnd = moment(req.query.end).format('YYYY-MM-DD HH:mm:ss');

      const result = await database.pool.query('SELECT tablerdv.title, tablerdv.rdvStart, tablerdv.rdvEnd, tableclients.clientName FROM tablerdv INNER JOIN tableclients ON tablerdv.clientID = tableclients.clientID');
      res.json({result});
      console.log(result);
  } catch (err) {
      console.log(err);
  }
});

router.post('/api/calendar/create-event', async (req, res) => {
  try {
    const clientID = req.body.extendedProps.clientID;
    const title = req.body.title;
    const start = req.body.start;
    const end = req.body.end;
    const result = await database.pool.query('INSERT INTO main_db.tablerdv(clientID, title, rdvStart, rdvEnd) values (?, ?, ?, ?)', [clientID, title, start, end]);
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
