import {useState} from "react";
import "./rdvFormulaire.css"
import React from "react";

function RendezvousFormulaire() {


    const [nomValue] = useState("")
    const [emailValue] = useState("")
    const [telValue] = useState("")

    function handleSubmit(event) {
        event.preventDefault()
    }

    return (
        <form onSubmit={handleSubmit} className="rdvFormulaire">
            <div className="container">
                <input name="nom" value={nomValue} placeholder="Nom Complet" id="nom"/>
                <input name="email" value={emailValue} placeholder="Email" id="email"/>
                <input name="telephone" value={telValue} placeholder="Numéro de téléphone" id="telephone"/>
                <input type="date" name="date" id="date"/>
                <input type="time" name="heure" id="heure"/>
                <select id="service">
                    <option value="option1">Service 1</option>
                    <option value="option2">Service 2</option>
                    <option value="option3">Service 3</option>
                </select>
            </div>
            <div className="extraButton">
                <button type="submit">Envoyer</button>
            </div>
        </form>
    )
}

export default RendezvousFormulaire;