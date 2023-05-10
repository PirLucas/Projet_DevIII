import React from "react";
import Temoignages from "../../components/temoignages";
import Header from "../../components/header";
import Tarifs from "../../components/tarifs";
import Footer from "../../components/footer";
import Calendar from "../../components/Calendar";
import Map from "../../components/map";
import AdminPanel from "../admin-panel";
import NavComponent from "../../components/nav.js";


function Homepage() {

  return (
    <div className="home-container">
        <NavComponent/>
        <Header/>
        <Tarifs/>
        <Temoignages/>
        <Map/>
        <Footer/>
        {/* <Calendar/> */}
        {/* <AdminPanel/> */}

    </div>
  );
}

export default Homepage;