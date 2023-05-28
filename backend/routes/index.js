var express = require('express');
const database = require("../dbPool");
var router = express.Router();
const https = require("https")


//!!!!!ROUTE INUTILISEE (tests)


/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({ "a": "a", "b": "b" });
  //res.render('index', { title: 'Express' });
});

router.post("/", async function(req,res){
  //res.json(req.body)

  try {
    const result = await database.pool.query("insert into table_test (mots) values(?)", [req.body.fname]);
  } catch (err) {
    throw err;
  }
    try {
      const result = await database.pool.query("select * from table_test");
      valeur = req.body.fname
      console.log(req.body.fname)
      res.json({ valeur , result});
    } catch (err) {
      throw err;
    }
})

module.exports = router;
