var express = require('express');
const database = require("../dbPool");
var router = express.Router();


router.get('/', async function(req, res, next) {
    let result
    try {
        //const result = await database.pool.query(`insert into main_db.tabletemoignages(clientID, contenu, date) values(${clientID}, "${req.body.contenu}", "${date}") `);
        query = `SELECT contenu, tabletemoignages.clientID, temoignageID
FROM (SELECT clientID,  max(temoignageID) AS temoignageID from tabletemoignages GROUP BY clientID) AS A 
JOIN tabletemoignages USING (temoignageID)`

        //const result = await database.pool.query(query, [clientID, req.body.contenu, date])
        result = await database.pool.query(query,[])
    } catch (err) {
        throw err;
    }
    res.json({rep : result});
    return
});

router.delete('/', function(req, res, next) {
    res.send(`${req.query.clientID}`);
});

router.post('/', async function(req, res, next) {

    //1-vérifier que l'adresse mail est dans la db = le client existe
    //1.1 si mail inexistant -> message de refus
    try {
        const result = await database.pool.query(`select * from tableclients where mail = "${req.query.clientMail}"`);
        console.log(result)
        if (result.length == 0) {
            res.json({rep : `Une erreur est survenue`});
            return
        }
        else {
            clientID = result[0].clientID
            console.log(result[0].clientID)
        }
    } catch (err) {
        throw err;
    }

    //1.2 si mail existant: obtenir le clientID a partir de l'adresse mail

    //2 obtenir la date
    var date = new Date();
    console.log(date.toISOString().slice(0,10));
    console.log("aaa",req.body)
    try {
        //const result = await database.pool.query(`insert into main_db.tabletemoignages(clientID, contenu, date) values(${clientID}, "${req.body.contenu}", "${date}") `);
        query = `insert into main_db.tabletemoignages(clientID, contenu, date) values(?, ? , ?) `

        const result = await database.pool.query(query, [clientID, req.body.contenu, date])
    } catch (err) {
        throw err;
    }
    console.log(req.query.clientMail)
    res.json({rep : `Le témoignage est enregistré et est en attente d'approbation`});
    return
});

module.exports = router;
