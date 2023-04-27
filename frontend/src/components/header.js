import React from "react";
import Intro from "../assets/img/intro-bg.jpg";
import MovingGif from "../assets/img/ezgif.com-video-to-gif.gif";

function Header(paramDict) {//doit commencer avec une majuscule
    return(
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
    )
}

export default Header;