import React from "react";
//import { Tooltip } from 'bootstrap';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Homepage from "./page/homepage";
import Rendezvous from "./page/rendezvous";
import "./App.css"





function App() {
    /*useEffect(() => {
        // Initialize tooltips
        var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
        var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
          return new Tooltip(tooltipTriggerEl)
        })
      }, []);*/

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
              </ul>
          </nav>
          <Routes className="App">
              <Route path="/" element={<Homepage/>} />
              <Route path="/rendezvous" element={<Rendezvous/>} />
          </Routes>
      </Router>
  );
}

export default App;
