const express = require('express');
const database = require("../dbPool");
//const moment = require("moment");
const jsonwebtoken = require("jsonwebtoken");
const router = express.Router();

//Le JWT secret, pour l'instant pas stocké dans une variable d'environnement
const JWT_SECRET = process.env.JWT_SECRET

router.post("/", async (req, res) => {
    const {username, password} = req.body;
    try {
        const result = await database.pool.query(`select *
                                                  from tableadmin
                                                  where username = "${username}"
                                                    and password = "${password}"`);
        if (result.length === 1) {
            const token = jsonwebtoken.sign({username: username}, JWT_SECRET);
            res.json({token});
            return;
        }
        res.status(401).json({rep :"Error 401 : Mauvais nom d'utilisateur ou mot de passe"})
    }
    catch (err) {
        res.status(500).json({rep :"Erreur d'authentification"})
    }



});

module.exports = router;