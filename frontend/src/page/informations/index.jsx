import Header from "../../components/header";
import Tarifs from "../../components/tarifs";
import Temoignages from "../../components/temoignages";
import Contact from "../../components/contact";
import Footer from "../../components/footer";
import React from "react";
import "./style.css"
import AffichageTemoignages from "../../components/affichageTemoignages";

function Informations() {
    return (
        <div className="informations">
            <AffichageTemoignages/>
        </div>
    );
}

export default Informations;

