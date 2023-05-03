const express = require('express');
const database = require("../dbPool");
const moment = require("moment");
const router = express.Router();

router.get('/get-events', async (req, res) => {
  try {
      const start = moment(req.query.start).format('YYYY-MM-DD HH:mm:ss');
      const end = moment(req.query.end).format('YYYY-MM-DD HH:mm:ss');

      const result = await database.pool.query(`SELECT contenu FROM tableanamneses WHERE start >= ${req.query.start} AND end <= ${req.query.end}`);
      res.send(result);
      console.log(result);
      console.log("the server is running");
  } catch (err) {
      console.log(err);
      res.sendStatus(500);
  }
});

router.post('/create-event', async (req, res) => {
  try {
      const result = await database.pool.query(`INSERT INTO main_db.tableanamneses(contenu, start, end) values (${req.query.contenu}, ${req.query.start}, ${req.query.end})`);
      res.sendStatus(201);
  } catch (err) {
      console.log(err);
      res.sendStatus(500);
  }
});

router.put('/', async function(req, res, next) {
  res.send(`${req.query.anamneseID}`);
});

router.delete('/', function(req, res, next) {
  res.send(`${req.query.anamneseID}`);
});





module.exports = router;
