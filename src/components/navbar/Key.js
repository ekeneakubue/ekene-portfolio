import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { BsTelephoneFill, BsHouseFill, BsFileCodeFill, BsPersonFill} from "react-icons/bs";
import './Navbar.css'


import { FaCode } from "react-icons/fa";


function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Container>
    <Navbar
      expanded={expand}
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" target="_blank">
          <h4><FaCode style={{ marginBottom: "2px" }} className="text-danger"/> Ekene<b>Akubue</b></h4>
        </Navbar.Brand>

        <Navbar.Toggle
            className="setup text-danger"
            aria-controls="responsive-navbar-nav"
            onClick={() => {
              updateExpanded(expand ? false : "expanded");
            }}
          >
          <i class="bi bi-list"></i>
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto" defaultActiveKey="#home">

            <Nav.Item className="setup">
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <BsHouseFill style={{ marginBottom: "2px" }} className='text-danger'/> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="setup">
              <Nav.Link as={Link} to="/about" onClick={() => updateExpanded(false)}>
              <BsPersonFill style={{ marginBottom: "2px" }} className='text-danger'/> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="setup">
              <Nav.Link as={Link} to="/projects" onClick={() => updateExpanded(false)}>
                <BsFileCodeFill style={{ marginBottom: "2px" }} className='text-danger'/> Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="setup">
              <Nav.Link as={Link} to="/contact" onClick={() => updateExpanded(false)}>
                <BsTelephoneFill style={{ marginBottom: "2px" }} className='text-danger'/> Contact Me
              </Nav.Link>
            </Nav.Item>

            

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Container>
  );
}

export default NavBar;
