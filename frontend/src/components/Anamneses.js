import React, {useEffect, useState} from "react";

function Anamneses(paramDict) {//doit commencer avec une majuscule
    const [arr, setArr] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [clientAffiché, setClientAffiché] = useState(0)
    const [afficheOuModifie, setAfficheOuModifie] = useState(0) //affiche=0, modifie=1

    let texte = "placeholder"

    function ajouterAnamnese(clientID){
        console.log("Ajout", clientID)
        setClientAffiché(clientID)
    }

    function voirAnamnese(clientID){
        console.log("Voir", clientID)
        setClientAffiché(clientID)
    }

    function modifierAnamnese(int){
        setAfficheOuModifie(int)
        console.log(afficheOuModifie)
    }

    async function postAnamnese(event, clientID){
        event.preventDefault()

        setAfficheOuModifie(0)

        console.log(event.target.contenu.value)
        await fetch(`${process.env.REACT_APP_URL}/anamneses?` + new URLSearchParams({
            clientID : (clientID),
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
            .then(response => console.log(event.target.contenu.value) || response.json()) //1e ".then" => le fetch a renvoyé une "response", response.json renvoie une promesse au 2 eme ".then"
            .then(data => { //2e ".then" = "data" contiend le payload de la réponse (un objet créé a partir d'un message json)
                ///////TRAITEMENT DE L'OBJET OBTENU
                console.log(data);
                getAnamneses()
                //texte = data.rep
                //if (texte == "Le témoignage est enregistré et est en attente d'approbation"){document.getElementById("temoignageArea").value = "";}
                //document.getElementById("message").innerText = texte
                //return(data.valeur[0].rdvDate)

                //////FIN
            })
            .catch(error => console.error(error));
    }

    async function putAnamnese(event, clientID){
        event.preventDefault()

        setAfficheOuModifie(0)

        console.log(event.target.contenu.value)
        await fetch(`${process.env.REACT_APP_URL}/anamneses?` + new URLSearchParams({
            clientID : (clientID),
        }), { //port 3000 = serveur backend
            method: 'PUT',
            body : JSON.stringify({
                // Add parameters here
                contenu: event.target.contenu.value
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },


        })
            .then(response => console.log(event.target.contenu.value) || response.json()) //1e ".then" => le fetch a renvoyé une "response", response.json renvoie une promesse au 2 eme ".then"
            .then(data => { //2e ".then" = "data" contiend le payload de la réponse (un objet créé a partir d'un message json)
                ///////TRAITEMENT DE L'OBJET OBTENU
                console.log(data);
                getAnamneses()
                //texte = data.rep
                //if (texte == "Le témoignage est enregistré et est en attente d'approbation"){document.getElementById("temoignageArea").value = "";}
                //document.getElementById("message").innerText = texte
                //return(data.valeur[0].rdvDate)

                //////FIN
            })
            .catch(error => console.error(error));
    }


    async function getAnamneses() {

        setIsLoading(true)
        await fetch(`${process.env.REACT_APP_URL}/anamneses?` + new URLSearchParams({
            //clientID: 1,
        }), { //port 3000 = serveur backend
            method: 'GET',

        })
            .then(response => response.json()) //1e ".then" => le fetch a renvoyé une "response", response.json renvoie une promesse au 2 eme ".then"
            .then(data => { //2e ".then" = "data" contiend le payload de la réponse (un objet créé a partir d'un message json)
                ///////TRAITEMENT DE L'OBJET OBTENU
                setIsLoading(false) //verifier longeur
                console.log(data.rep)
                setArr(data.rep)
            })
    }


    useEffect(() => {
        getAnamneses()
    }, []);

    if (isLoading) {
        return <div className="App">Loading...</div>;
    }
    return (
        <div>

            {arr.map((value,index) =>{
                const key = index
                return(
                    <div>
                        <div key={key} style={{border: "2px solid black"}}>
                            <div>client: {String(value.clientID)}</div>
                            {(value.contenu == null)? //si pas d'anamnese en db
                                <div>
                                <button id={"bouton"+ String(value.clientID)} onClick={e =>ajouterAnamnese(value.clientID)}>ajouter anamnèse</button>
                                {(clientAffiché == value.clientID)? //si c'est le client qu'on affiche
                                    <div>
                                        <form align={"center"} onSubmit={e =>postAnamnese(e,value.clientID)}>
                                            <textarea type="text" name="contenu" rows="10" cols="50" defaultValue={value.contenu}/>
                                            <button type={"submit"}>enregistrer</button>
                                        </form>
                                    </div>
                                    :
                                    null
                                }
                                </div>
                            : //s'il y a une anamnese
                                <div>

                                {(clientAffiché == value.clientID)?
                                    <div>
                                        {(afficheOuModifie == 0) ?
                                            <div>
                                                <div>{value.contenu}</div>
                                                <button onClick={e =>modifierAnamnese(1)}>modifier anamnese</button>
                                            </div>
                                            :
                                            <form align={"center"} onSubmit={e =>putAnamnese(e,value.clientID)}>
                                                <textarea type="text" name="contenu" rows="10" cols="50" defaultValue={value.contenu}/>
                                                <button type={"submit"}>enregistrer</button>
                                            </form>
                                        }
                                    </div>
                                    :
                                    <button id={"bouton"+ String(value.clientID)} onClick={e =>voirAnamnese(value.clientID)}>voir anamnèse</button>
                                }
                                </div>
                            }


                        </div>
                        <br/>
                    </div>

                )})}


        </div>
    );

}
//<button type={"button"} onClick={eventHandler}>bouton</button>

export default Anamneses;