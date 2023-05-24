import React  from 'react';
import {useState, useEffect} from "react";
function AffichageTemoignages(paramDict) {//doit commencer avec une majuscule
    const [arr, setArr] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    let texte = "placeholder"

    async function getTemoignage() {
        setIsLoading(true)
        await fetch(`${process.env.REACT_APP_URL}/temoignages?` + new URLSearchParams({
            clientID: 1,
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
        getTemoignage()
    }, []);



    if (isLoading) {
        return <div className="App">Loading...</div>;
    }
    return (
        <div style={{margin: 100}}>
            <h2>
                Les Avis des Clients
            </h2>

            {arr.map((value,index) =>{
                return(
                <div key={index} style={{border: "2px solid black"}}>
                    <div>{String(value.clientID)}</div>
                    <div>{String(value.contenu)}</div>
                </div>)})}


        </div>
    );

}

/*

{arr.map((value,index) =>
        <div style={{border: "2px solid black"}}>
            <label>{texte}</label>
        </div>)}
 */
export default AffichageTemoignages;