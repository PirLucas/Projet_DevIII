var express = require('express');
var router = express.Router();


var database = require('../dbPool');

//!!!!!ROUTE INUTILISEE (tests)

/* GET home page. */
router.get('/', async function (req, res, next) {

    try {
        const result = await database.pool.query("select * from table_test");
        valeur = result
        res.json({ valeur });
    } catch (err) {
        throw err;
    }
});

router.get('/a', async function (req, res, next) {

    try {
        const result = await database.pool.query("insert into table_test (mots) values('test')");
        res.send("a");
    } catch (err) {
        throw err;
    }
});



module.exports = router;
