import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


function Contact(paramDict) {//doit commencer avec une majuscule
    return(
        <section className="text-center content-section" id="contact">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 mx-auto">

                        <h2>Contactez moi</h2>
                        <p>Voici les liens vers mes réseaux :</p>
                        <ul className="list-inline banner-social-buttons">
                            <li className="list-inline-item">&nbsp;<button className="btn btn-primary btn-lg btn-default" type="button"><i className="fa fa-google-plus fa-fw"></i><span className="network-name">&nbsp; Google+</span></button></li>
                            <li className="list-inline-item">&nbsp;<button className="btn btn-primary btn-lg btn-default" type="button"><i className="fa fa-twitter fa-fw"></i><span className="network-name">&nbsp;Twitter</span></button></li>
                            <li className="list-inline-item">&nbsp;<button className="btn btn-primary btn-lg btn-default" type="button"><i className="fa fa-github fa-fw"></i><span className="network-name">&nbsp;github</span></button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;