import React from "react";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Homepage from "./page/homepage";
import Rendezvous from "./page/rendezvous";
import "./App.css"
import Informations from "./page/informations";

function App() {

    return (
        <Router>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Accueil</Link>
                    </li>
                    <li>
                        <Link to="/rendezvous">Rendez-vous</Link>
                    </li>
                    <li>
                        <Link to="/informations">Informations</Link>
                    </li>
                </ul>
            </nav>
            <Routes className="App">
                <Route path="/" element={<Homepage/>}/>
                <Route path="/rendezvous" element={<Rendezvous/>}/>
                <Route path="/informations" element={<Informations/>}/>
            </Routes>
        </Router>
    );
}

export default App;
