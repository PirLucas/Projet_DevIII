import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/style-font.css';

function RendezvousFormulaire() {

    let resultat = ""

    function hourToSeconds(time) {
        const [hours, minutes] = time.split(':');
        return (parseInt(hours) * 3600 + parseInt(minutes) * 60);
    }

    async function PostRdvForm(event) {

        event.preventDefault()

        /*let dateStr = event.target.date.value
        dateStr = dateStr.split("-")
        let dateTimestamp = new Date(dateStr[0], dateStr[1], dateStr[2]).getTime();
        dateTimestamp = toString(dateTimestamp)

        let timeInSeconds = hourToSeconds(event.target.heure.value);
        timeInSeconds = toString(timeInSeconds)*/

        await fetch('http://localhost:3000/rendezvous?' + new URLSearchParams({
            email: event.target.email.value,
        }), {
            method: 'POST',
            body: JSON.stringify({
                prenom: event.target.prenom.value,
                nom: event.target.nom.value,
                email: event.target.email.value,
                tel: event.target.tel.value,
                date: event.target.date.value,
                heure: event.target.heure.value,
                service: event.target.service.value
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        resultat = data.rep
        document.getElementById("resultat").innerText = resultat
    })


    }

    return (
        <div className="card" style={{width: '500px'}}>
            <div className="card-header">
                <div className="text-header">Prendre rendez-vous</div>
            </div>
            <div className="card-body">
                <form action="#" onSubmit={PostRdvForm}>
                    <div className="form-group">
                        <label htmlFor="prenom">Prénom:</label>
                        <input required className="form-control" name="prenom" id="prenom" type="text"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="nom">Nom:</label>
                        <input required className="form-control" name="nom" id="nom" type="text"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input required className="form-control" name="email" id="email" type="email"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="tel">Téléphone:</label>
                        <input required className="form-control" name="tel" id="tel" type="number"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="date">Date:</label>
                        <input required className="form-control" name="date" id="date" type="date"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="heure">Heure:</label>
                        <input required className="form-control" name="heure" id="heure" type="time"/>
                    </div>
                    <div className="form-group">
                        <fieldset className="form-group">
                            <legend>Choisissez un service:</legend>
                            <div className="divRadio">
                                <input required type="radio" id="service" name="service" value="1"/>
                                    <label className="radioLabel" htmlFor="service1">Service 1</label>
                            </div>

                            <div className="divRadio">
                                <input required type="radio" id="service" name="service" value="2"/>
                                    <label className="radioLabel" htmlFor="service2">Service 2</label>
                            </div>

                            <div className="divRadio">
                                <input required type="radio" id="service" name="service" value="3"/>
                                    <label className="radioLabel" htmlFor="service3">Service 3</label>
                            </div>
                        </fieldset>
                    </div>

                    <input type="submit" className="btn float-end" value="submit" />
                </form>
            </div>
            <label className="resultLabel" id="resultat"></label>
        </div>
    )
}

export default RendezvousFormulaire;