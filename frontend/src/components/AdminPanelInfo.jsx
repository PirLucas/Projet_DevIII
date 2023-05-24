import ProtectedRoute from './ProtectedRoute';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Desk from "../assets/img/desk.jpg";
import Boy from "../assets/img/boy.jpg";
import "../assets/css/Profile-with-data-and-skills.css";
import "../assets/css/Tamplate-SB-Admin-on-BSS.css";
import '../assets/css/style-font.css';
import Calendar from './Calendar';
import Sidenav from './Sidenav';
import AdminPanelGet from './AdminPanelGetInfo';
import Anamneses from "./Anamneses";

function AdminPanelInfo() {

    const [showCalendar, setShowCalendar] = useState(false);
    const [showDashboard, setShowDashboard] = useState(true);
    const [showAnamneses, setShowAnamneses] = useState(false);

    function handleCalendarClick() {
        setShowCalendar(true);
        setShowDashboard(false);
        setShowAnamneses(false);
    }

    function handleDashboardClick() {
        setShowCalendar(false);
        setShowDashboard(true);
        setShowAnamneses(false);
    }

    function handleAnamnesesClick() {
        setShowCalendar(false);
        setShowDashboard(false);
        setShowAnamneses(true);
    }

return (
    <div>
        <nav className="navbar navbar-dark navbar-expand bg-dark sb-topnav">
            <div className="container-fluid"><a className="navbar-brand" href="#"><img src={Desk} style={{width: "28px", marginRight: "10px", borderWidth: "3px", borderStyle: "solid", borderRadius: "8px"}}/>Feet Dreams Panel</a>
                <form className="d-none d-md-inline-block order-2 ms-auto me-0 me-md-3 my-2 my-md-0">
                    <div className="input-group">
                        <div className="input-group-append"></div>
                    </div>
                </form>
                <ul className="navbar-nav d-flex order-3 ms-auto ms-md-0">
                    <li className="nav-item d-flex d-sm-flex d-md-none justify-content-center align-items-center justify-content-sm-center" style={{marginRight: "7px"}}></li>
                    <li className="nav-item d-flex justify-content-center align-items-center">
                        <div className="nav-item dropdown no-arrow"><a className="dropdown-toggle active" aria-expanded="false" data-bs-toggle="dropdown" href="#">&nbsp;<img className="rounded-circle" src={Boy} style={{width: "40px", borderWidth: "2px", borderStyle: "solid"}}/></a>
                            <div className="dropdown-menu dropdown-menu-end text-start shadow pulse animated" style={{marginTop: "16px"}}><a className="dropdown-item" href="#">Profil</a><a className="dropdown-item" href="#">Historique d'activité</a><a className="dropdown-item" href="#">Paramètres</a>
                                <div className="dropdown-divider"></div><a className="dropdown-item" href="#">Se déconnecter</a>
                          </div>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
        <div id="layoutSidenav" style={{ backgroundColor: 'whitesmoke', color: 'black'}}>
          <Sidenav
            onDashboardClick={handleDashboardClick}
            onCalendarClick={handleCalendarClick}
            onAnamnesesClick={handleAnamnesesClick}

          />
            {showCalendar && <   Calendar />}
            {showDashboard && <   AdminPanelGet />}
            {showAnamneses && <   Anamneses />}

          <div id="layoutSidenav_content">
            <main>
                <Routes>
                    <Route path="/adminPanel" element={<ProtectedRoute component={AdminPanelInfo} />} />
                    <Route path="/adminPanel/calendar" element={<ProtectedRoute component={Calendar} />} />
                </Routes>
            </main>
          </div>
        </div>
    </div>
  );
}

//onAnamnesesClick={handleAnamnesesClick}   {showAnamneses && <   Anamneses />}
export default AdminPanelInfo;

