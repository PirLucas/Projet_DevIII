import React  from 'react';
function Temoignages(paramDict) {//doit commencer avec une majuscule

    let texte = ""

    function eventHandler(){
        console.log("Template")
    }

    async function postTemoignage(event) {
        event.preventDefault()
        console.log(event.target.mail.value)
        await fetch(`http://localhost:3000/temoignages?` + new URLSearchParams({
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
                document.getElementById("a").innerText = texte
                //return(data.valeur[0].rdvDate)

                //////FIN
            })
            .catch(error => console.error(error));

    }

    return(
        <div style={{border: "2px solid black"}}>
            <h1 align={"center"}>TEMOIGNAGES</h1>
            <form style={{align:"center"}} onSubmit={postTemoignage}>
                <label>
                    Mail:
                    <input type="text" name="mail" />
                </label>
                <br/>
                <label>
                    Contenu:
                    <textarea name="contenu" rows="10" cols="50"/>
                </label>
                <br/>
                <button type="submit" value="Submit" >Submit</button>
            </form>

            <label id={"a"}>{texte}</label>
        </div>
    )
}
//<button type={"button"} onClick={eventHandler}>bouton</button>

export default Temoignages;