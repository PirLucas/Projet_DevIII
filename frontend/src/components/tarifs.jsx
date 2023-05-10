import React , {useEffect} from "react";
import $ from 'jquery';
import Background from "../assets/img/downloads-bg.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/animate.min.css';
import '../assets/css/aos.min.css';
import '../assets/css/Live-Hours-of-Operation.css';
import '../assets/css/Live-Hours-of-Operation-styles.css';


function Tarifs(paramDict) {//doit commencer avec une majuscule
    useEffect(() => {
        $('.opening-hours li').eq(new Date().getDay()).addClass('today');
    }, []);

    return(
        <section className="text-center download-section content-section" id="tarifs" style={{backgroundImage: `url(${Background})`}}>
            <div className="container">
                <div className="col-lg-8 mx-auto">
                    <div className="container demo-bg" style={{background: "var(--bs-border-color-translucent)", borderColor: "var(--bs-blue)"}}>
                        <div className="row">
                            <div className="col-sm-8">
                                <ul className="list-unstyled prices">
                                    <li><span className="pull-right"></span></li>
                                </ul>
                                <h1>Tarifs</h1>
                                <div className="tarifs me-xl-0 ms-xl-5" style={{width: "310px", margin: "11px"}}>
                                    <div style={{display: "grid", margin: "0px 0px 0px 25px", padding: "0px"}}>
                                        <ul className="list-unstyled text-center">
                                            <li className="me-xl-0"><span className="pull-right">10€</span>1 séance</li>
                                            <li><span className="pull-right">50€&nbsp;</span><span></span>10 séances</li>
                                            <li><span className="pull-right">100€</span>20 séances</li>
                                            <li><span className="pull-right">jsp €</span>extra ?</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="business-hours">
                                    <h2 className="title">Horaires d'ouverture</h2>
                                    <ul className="list-unstyled opening-hours">
                                        <li>Dimanche <span className="pull-right">Fermé</span></li>
                                        <li>Lundi <span className="pull-right">Fermé</span></li>
                                        <li>Mardi <span className="pull-right">10h-20h</span></li>
                                        <li>Mercredi <span className="pull-right">10h-18h</span></li>
                                        <li>Jeudi <span className="pull-right">10h-18h</span></li>
                                        <li>Vendredi <span className="pull-right">10h-18h</span></li>
                                        <li>Samedi <span className="pull-right">10h-16h</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p style={{margin: "17px"}}>Prenez rendez-vous</p><button className="btn btn-primary btn-lg btn-default" type="button">Rendez-vous</button>
                </div>
            </div>
        </section>
    )
}

export default Tarifs;