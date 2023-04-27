import React from "react";

function Nav(paramDict) {//doit commencer avec une majuscule
    return(
        <nav className="App-header" id="mainNav" >
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
    )
}

export default Nav;