import RendezvousFormulaire from "../../components/rdvFormulaire";
import "./style.css"
import React from "react";
import Intro from "../../assets/img/intro-bg.jpg";
import NavComponent from "../../components/nav";

function Rendezvous() {

    return (
        <div className="rendezvous" style={{backgroundImage: `url(${Intro})`}}>
	    <NavComponent/>
            <RendezvousFormulaire/>
        </div>
    );
}

export default Rendezvous;
