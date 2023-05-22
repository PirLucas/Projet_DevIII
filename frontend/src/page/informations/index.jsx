import Header from "../../components/header";
import Tarifs from "../../components/tarifs";
import Temoignages from "../../components/temoignages";
import Contact from "../../components/contact";
import Footer from "../../components/footer";
import React from "react";
import "./style.css"
import AffichageTemoignages from "../../components/affichageTemoignages";
import NavComponent from "../../components/nav";

function Informations() {
    return (
        <div className="information">
            <NavComponent/>
            <Header/>
            <AffichageTemoignages/>
        </div>
    );
}

export default Informations;

