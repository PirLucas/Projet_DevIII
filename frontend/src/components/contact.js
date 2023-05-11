import React from "react";



function Contact(paramDict) {//doit commencer avec une majuscule
    return(
        <section className="text-center content-section" id="contact">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 mx-auto">
                        <h2>Contact us</h2>
                        <p>Feel free to leave us a comment on the<a href='#'>&nbsp;Grayscale template overview page</a>&nbsp;to give some feedback about this theme!</p>

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