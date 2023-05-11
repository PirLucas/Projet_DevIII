
import React from "react";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Homepage from "./page/homepage";
import Rendezvous from "./page/rendezvous";
import "./App.css"

import AdminPanel from "./pages/adminPanel";
import Calendar from "./components/Calendar";
import Login from './components/Login';
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
                <Route path="/login" element={<Login/>}/>
                <Route path="/" element={<Homepage/>}/>
                <Route path="/rendezvous" element={<Rendezvous/>}/>
                <Route path="/adminPanel" element={<AdminPanel/>}/>
                <Route path="/adminPanel/calendar" element={<Calendar/>}/>
                <Route path="/informations" element={<Informations/>}/>
            </Routes>
        </Router>
    );



}

export default App;
