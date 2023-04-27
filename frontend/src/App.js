import React, { useEffect } from "react";
import Background from "./assets/img/downloads-bg.jpg";
import Intro from './assets/img/intro-bg.jpg';
import MovingGif from './assets/img/ezgif.com-video-to-gif.gif';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.min.js';
import { Tooltip } from 'bootstrap';
import Temoignages from "./components/temoignages";
import Nav from "./components/nav.js"
import "./App.css"
import Header from "./components/header";
import Tarifs from "./components/tarifs";
import Contact from "./components/contact";
import Footer from "./components/footer";




function App() {
    useEffect(() => {
        // Initialize tooltips
        var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
        var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
          return new Tooltip(tooltipTriggerEl)
        })
      }, []);

  return (
    <>
        <Nav/>
        <Header/>
        <Tarifs/>
        <Temoignages/>
        <Contact/>
        <Footer/>

    </>
  );
}

export default App;
