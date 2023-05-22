import React, { useEffect, useState } from 'react';
import { Helmet } from "react-helmet";
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/animate.min.css';
import '../assets/css/aos.min.css';
import '../assets/fonts/font-awesome.min.css';
import AOS from 'aos';
import FeetLogo from "../assets/img/feet dreams logo fav white.webp";
import FeetText from "../assets/img/feet dreams logo text white.webp";
import 'aos/dist/aos.css';
import '../assets/css/style-font.css';



function NavComponent() {
  
  const [navBackground, setNavBackground] = useState(false)
  const navRef = React.useRef()
  navRef.current = navBackground

  useEffect(() => {
    AOS.init({
      duration: 1000, // Default duration for all animations
    });
  }, []);
  
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 100
      if (navRef.current !== show) {
        setNavBackground(show)
      }
    }
    document.addEventListener('scroll', handleScroll)
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div>
      <Helmet>
        <body id="page-top" data-bs-spy="scroll" data-bs-target="#mainNav" data-bs-offset="77" data-aos-easing="ease" data-aos-duration="400" data-aos-delay="0" />
      </Helmet>
      <Navbar
        collapseOnSelect
        expand="md"
        bg={navBackground ? 'dark' : 'transparent'}
        variant={navBackground ? 'dark' : 'light'}
        fixed="top"
        id="mainNav"
        >
          <Container>
        <Navbar.Brand href="/" className="d-flex align-items-center" style={{ paddingRight: "0px", marginRight: "0px"}}>
          <img className="img-fluid d-block d-xxl-flex justify-content-xxl-start tada animated" src={FeetLogo} style={{background: "rgba(255,255,255,0)", margin: "-6px", padding: "0px", marginRight: "0px", marginLeft: "0px"}}/>
          <img className="img-fluid d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline flex-shrink-1" data-bss-disabled-mobile="true" data-aos="fade" data-aos-duration="500" src={FeetText} style={{overflow: "visible", transform: "perspective(0px) skew(0deg)"}}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{ marginRight: '10px' }}/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
          <Nav.Link eventKey="1" href="/informations" className="active">Qu'est-ce que c'est ?</Nav.Link>
      <Nav.Link eventKey="2" href="#tarifs">Tarifs</Nav.Link>
      <Nav.Link eventKey="3" href="#contact">Contact</Nav.Link>
      <Nav.Link eventKey="4" href="#videos">Videos</Nav.Link>
      <Nav.Link eventKey="5" href="/rendezvous" className="tada animated" style={{backgroundColor: "#5c9688"}}>PRENDRE RENDEZ-VOUS</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavComponent;
