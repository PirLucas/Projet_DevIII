import Header from "../../components/header";
import Tarifs from "../../components/tarifs";
import Temoignages from "../../components/temoignages";
import Contact from "../../components/contact";
import Footer from "../../components/footer";
import React from "react";
import "./style.css"
import NavComponent from "../../components/nav.js";

function Homepage() {
    return (
        <div className="home-container">
            <NavComponent/>
            <Header/>
            <Tarifs/>
            <Temoignages/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default Homepage;

