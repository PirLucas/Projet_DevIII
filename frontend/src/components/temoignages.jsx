

import React from "react";
import Intro from "../assets/img/intro-bg.jpg";
import '../assets/fonts/font-awesome.min.css';
import '../assets/css/style-font.css';
import 'bootstrap/dist/css/bootstrap.min.css';



function Temoignages(paramDict) {//doit commencer avec une majuscule

    let texte = ""

    function eventHandler(){
        console.log("Template")
    }

    async function postTemoignage(event) {

        event.preventDefault()
        if (event.target.contenu.value == ""){
            document.getElementById("message").innerText = "Veuillez inscrire quelque chose"
            return
        }
        console.log(event.target.mail.value)

        await fetch(`${process.env.REACT_APP_URL}/temoignages?` + new URLSearchParams({
            clientMail : String(event.target.mail.value),
        }), { //port 3000 = serveur backend
            method: 'POST',
            body : JSON.stringify({
                // Add parameters here
                contenu: event.target.contenu.value
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },


        })
            .then(response => console.log(event.target.mail.value) || response.json()) //1e ".then" => le fetch a renvoyé une "response", response.json renvoie une promesse au 2 eme ".then"
            .then(data => { //2e ".then" = "data" contiend le payload de la réponse (un objet créé a partir d'un message json)
                ///////TRAITEMENT DE L'OBJET OBTENU
                console.log(data);
                texte = data.rep
                if (texte == "Le témoignage est enregistré et est en attente d'approbation"){document.getElementById("temoignageArea").value = "";}
                document.getElementById("message").innerText = texte
                //return(data.valeur[0].rdvDate)

                //////FIN
            })
            .catch(error => console.error(error));

    }

    return(
        <div style={{border: "2px solid black"}} className="masthead" style={{backgroundImage: `url(${Intro})`}}>
            <h1 align={"center"}>Vous voulez partager votre expérience?</h1>
            <form align={"center"} onSubmit={postTemoignage}>
                <label>
                    Mail:
                    <input type="text" name="mail" />
                </label>
                <br/>
                <label>
                    Contenu:
                    <textarea id={"temoignageArea"} type="text" name="contenu" rows="10" cols="50"/>
                </label>
                <br/>
                <button type="submit" value="Submit" >Submit</button>
            </form>
            <div align={"center"} style={{border: "2px solid black"}}>
                <label id={"message"}>{texte}</label>
            </div>
        </div>
    )
}
//<button type={"button"} onClick={eventHandler}>bouton</button>

export default Temoignages;