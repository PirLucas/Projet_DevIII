import React from "react";
import { NavLink, useNavigate } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { FaAddressBook, FaCalendarAlt, FaDashcube } from 'react-icons/fa';

import "bootstrap/dist/css/bootstrap.min.css";
import '../assets/css/style-font.css';

function Sidenav({onDashboardClick, onCalendarClick}) {

    return (
        <div id="layoutSidenav_nav">
        <div id="sidenavAccordion" className="sb-sidenav accordion sb-sidenav-dark">
          <div className="sb-sidenav-menu">
            <div className="nav">
              <div>
                <div className="sb-sidenav-menu-heading"><span>Stats</span></div>
                <NavLink className="nav-link" activeClassName="active" to="/adminPanel" onClick={onDashboardClick}>
                  <div className="sb-nav-link-icon"><IconContext.Provider value={{ className: 'dashboard-icon' }}><FaAddressBook/></IconContext.Provider></div>
                  <span>Dashboard</span>
                </NavLink>
              </div>
              <div>
                <div className="sb-sidenav-menu-heading"><span>Rendez-vous</span></div>
                <NavLink className="nav-link" activeClassName="active" onClick={onCalendarClick}>
                  <div className="sb-nav-link-icon"><IconContext.Provider value={{ className: 'calendar-icon' }}><FaCalendarAlt /></IconContext.Provider></div>
                  <span>Calendrier</span>
                </NavLink>
              </div>
            </div>
          </div>
          <div className="sb-sidenav-footer">
            <div className="small"><span>Logged as : ADMIN</span></div>
          </div>
        </div>
      </div>
    )
}

export default Sidenav;