import React from "react";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from "./pages/homepage";
import Rendezvous from "./pages/rendezvous";
import AdminPanel from "./pages/admin-panel";
import "./App.css";


function App() {

    return (
        <Router>
            
            <Routes className="App">
                <Route path="/" element={<Homepage/>}/>
                <Route path="/rendezvous" element={<Rendezvous/>}/>
                <Route path="/admin-panel" element={<AdminPanel/>}/>
            </Routes>
        </Router>
    );
}

export default App;