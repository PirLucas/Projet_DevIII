import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '../assets/css/Footer-with-social-media-icons.css';



function Footer(paramDict) {//doit commencer avec une majuscule
    return(
        <footer id="footerpad">
            <div className="Footer">
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
    )
}

export default Footer;