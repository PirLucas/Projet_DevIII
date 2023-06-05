import Header from "../../components/header";
import Tarifs from "../../components/tarifs";
import Temoignages from "../../components/temoignages";
import Contact from "../../components/contact";
import Footer from "../../components/footer";
import React from "react";
import "./style.css"
import Intro from "../../assets/img/intro-bg.jpg";
import AffichageTemoignages from "../../components/affichageTemoignages";
import NavComponent from "../../components/nav";
import '../../assets/fonts/font-awesome.min.css';
import '../../assets/css/style-font.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Informations() {
    return (
        <div className="information" className="masthead" style={{backgroundImage: `url(${Intro})`}}>
            <NavComponent/>
            <div style={{margin: 100}}>
                <h1 style={{padding: 100}}>Réflexologie Plantaire</h1>

                <h2>Qu'est-ce que la Réflexologie Plantaire ?</h2>
                C’est une méthode manuelle et naturelle centrée sur l’autorégulation du corps humain. L’objectif est de soulager les symptômes en agissant sur des zones réflexes.
                Selon la médecine chinoise, les pieds contiendraient une représentation miniaturisée du corps humain dont chaque terminaison nerveuse, appelée aussi zone réflexe, correspondrait à un organe ou une partie de l’organisme.
                Quand un organe ou une partie du corps fonctionne mal, l’énergie est entravée, et ce blocage se répercute sur un point précis de la plante du pied.
                L’objectif du réflexologue est de libérer, via des pressions exercées sur les pieds, les tensions corporelles en rétablissant la circulation de l’énergie.
                La pression exercée sur les terminaisons nerveuses de chaque pied, permet, par l’intermédiaire du système nerveux, d’envoyer au cerveau des messages visant à rétablir l’équilibre du corps et favoriser ainsi un état de santé optimal. Car c’est au niveau des pieds, la partie du corps la plus éloignée du cœur, que les déchets se déposent en premier. Ils forment des petits grains qui encombrent les tissus.

            </div>
            <div>









                <h2>D’où vient la réflexologie ?</h2>

                2000 ans avant Jésus-Christ, en Egypte. (C’est dans le tombeau d’un pharaon médecin (Ankhmahor) que fut retrouvé le premier témoignage de l’utilisation de la réflexologie. En effet, on peut observer sur son sarcophage la représentation et la réflexologie).

                En chinois (5000 ans), l’idéogramme « pied » signifie : partie du corps sauvegardant la santé.

                En Asie, l’empreinte de pied du Bouddha est toujours illustrée avec diverses petites cases représentant chacune une partie du corps.

                En Inde, les pieds de Vishnu sont toujours richement garnis de symboles.

                Eunice Ingham, infirmière et kinésithérapeute américaine, localiser les zones réflexes sur les pieds en fonctions des tensions douloureuses qu'elle y décelait à l'aide de ses doigts. Cartographie actuelle des zones réflexes.
            </div>
            <AffichageTemoignages/>
        </div>
    );
}

export default Informations;

