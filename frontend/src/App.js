import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import Temoignages from "./components/temoignages";
import Nav from "./components/nav.js"
import "./App.css"
import Header from "./components/header";
import Tarifs from "./components/tarifs";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Calendar from "./components/Calendar";
import Modal from 'react-modal';


Modal.setAppElement('#root');


function App() {

  return (
    <>
        <Nav/>
        <Header/>
        <Tarifs/>
        <Temoignages/>
        <Contact/>
        <Footer/>
        <Calendar/>

    </>
  );
}

export default App;
