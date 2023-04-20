import React, { useEffect } from "react";
import Background from "./assets/img/downloads-bg.jpg";
import Intro from './assets/img/intro-bg.jpg';
import MovingGif from './assets/img/ezgif.com-video-to-gif.gif';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.min.js';
import { Tooltip } from 'bootstrap';


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
    <nav className="navbar navbar-light navbar-expand-md fixed-top" id="mainNav">
        <div className="container"><a className="navbar-brand d-grid" href="index.html" style={{width: "70px", padding: "0px", margin: "0px", height: "70px"}}><img className="img-fluid d-block d-xxl-flex justify-content-xxl-start tada animated" src="assets/img/feet%20dreams%20logo%20fav%20white.webp" style={{background: "rgba(255,255,255,0)", margin: "-6px", padding: "0px", marginLeft: "0px"}}/></a><img className="img-fluid d-none d-sm-inline d-md-none d-lg-none d-xl-inline d-xxl-inline flex-shrink-1" data-bss-disabled-mobile="true" data-aos="fade" data-aos-duration="500" src="assets/img/feet%20dreams%20logo%20text%20white.webp" style={{overflow: "visible", transform: "perspective(0px) skew(0deg)"}}/><button data-bs-toggle="collapse" className="navbar-toggler navbar-toggler-right" data-bs-target="#navbarResponsive" type="button" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation" value="Menu"><i className="fa fa-bars"></i></button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item nav-link"><a className="nav-link active" href="#about">Qu'est-ce que c'est ?</a></li>
                    <li className="nav-item nav-link"><a className="nav-link" href="#tarifs">Tarifs</a></li>
                    <li className="nav-item nav-link"><a className="nav-link" href="#contact">contact</a></li>
                    <li className="nav-item nav-link"><a className="nav-link" href="#videos">Videos</a></li>
                    <li className="nav-item nav-link"><a className="nav-link tada animated" href="#form-rendezvous" style={{backgroundColor: "#5c9688"}}>PRENDRE RENDEZ-VOUS</a></li>
                </ul>
            </div>
        </div>
    </nav>
    <header className="masthead" style={{backgroundImage: `url(${Intro})`}}>
        <div className="intro-body pt-xl-0 pt-sm-0" style={{backgroundImage: `url(${MovingGif})`, backgroundSize: "cover", height: "525px"}}>
            <div className="container">
                <div className="row justify-content-end">
                    <div className="col-lg-8 mx-auto">
                        <h1 className="text-break text-uppercase text-center justify-content-xxl-center align-items-xxl-center brand-heading" data-bs-toggle="tooltip" data-bss-tooltip="">La refléxologie plantaire</h1>
                        <p className="intro-text">A free, responsive, one page Bootstrap theme.<br/>Created with love.</p><a className="btn btn-link btn-circle" role="button" href="#about"><i className="fa fa-angle-double-down animated"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <section className="text-center content-section" id="about">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 mx-auto">
                    <h2>About grayscale</h2>
                    <p>Grayscale is a free Bootstrap theme. It can be yours right now, simply download the template on&nbsp;<a href="#">the preview page</a>. The theme is open source, and you can use it for any purpose, personal or commercial.</p>
                    <p>This theme features stock photos by&nbsp;<a href="#">Gratisography</a>&nbsp;along with a custom Google Maps skin courtesy of&nbsp;<a href="#">Snazzy Maps</a>.</p>
                    <p>Grayscale includes full HTML, CSS, and custom JavaScript files along with SASS and LESS files for easy customization!</p>
                </div>
            </div>
        </div>
    </section>
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
    <section className="text-center content-section" id="contact">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 mx-auto">
                    <h2>Contact us</h2>
                    <p>Feel free to leave us a comment on the<a href="#">&nbsp;Grayscale template overview page</a>&nbsp;to give some feedback about this theme!</p>
                    <ul className="list-inline banner-social-buttons">
                        <li className="list-inline-item">&nbsp;<button className="btn btn-primary btn-lg btn-default" type="button"><i className="fa fa-google-plus fa-fw"></i><span className="network-name">&nbsp; Google+</span></button></li>
                        <li className="list-inline-item">&nbsp;<button className="btn btn-primary btn-lg btn-default" type="button"><i className="fa fa-twitter fa-fw"></i><span className="network-name">&nbsp;Twitter</span></button></li>
                        <li className="list-inline-item">&nbsp;<button className="btn btn-primary btn-lg btn-default" type="button"><i className="fa fa-github fa-fw"></i><span className="network-name">&nbsp;github</span></button></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    <div className="map-clean"><iframe allowfullscreen="" frameborder="0" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBJ6lQwx6fhc3Ufh-W0MM8sAa6MNNXpAKY&amp;q=Gembloux+gare%2C+Belgique&amp;zoom=15" width="100%" height="450"></iframe></div>
    <footer id="footerpad">
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-lg-8 mx-auto">
                    <ul className="list-inline text-center">
                        <li className="list-inline-item"><a href="#"><span className="fa-stack fa-lg"><i className="fa fa-circle fa-stack-2x"></i><i className="fa fa-facebook fa-stack-1x fa-inverse"></i></span></a></li>
                        <li className="list-inline-item"><a href="#"><span className="fa-stack fa-lg"><i className="fa fa-circle fa-stack-2x"></i><i className="fa fa-twitter fa-stack-1x fa-inverse"></i></span></a></li>
                        <li className="list-inline-item"><a href="#"><span className="fa-stack fa-lg"><i className="fa fa-circle fa-stack-2x"></i><i className="fa fa-instagram fa-stack-1x fa-inverse"></i></span></a></li>
                        <li className="list-inline-item"><a href="#"><span className="fa-stack fa-lg"><i className="fa fa-circle fa-stack-2x"></i><i className="fa fa-linkedin fa-stack-1x fa-inverse"></i></span></a></li>
                    </ul>
                    <p className="copyright text-muted text-center">Copyright © Feet Dreams 2023| Web Design by EPHEC Designer</p>
                </div>
            </div>
        </div>
    </footer>
    </>
  );
}

export default App;
