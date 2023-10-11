import React, { Component } from "react";
import "../styles/navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavbarElm from "react-bootstrap/Navbar";

class Navbar extends Component {
  render() {
    return (
      <NavbarElm collapseOnSelect expand="lg" className="bg-body-white">
        <NavbarElm.Brand href="#home">
          Brit<span className="text-secondary">lex</span>
        </NavbarElm.Brand>
        <NavbarElm.Toggle
          aria-controls="responsive-navbar-nav"
          className="shadow-none border-0"
        />
        <NavbarElm.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#features">Skills</Nav.Link>
            <Nav.Link href="#features">About Us</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#pricing">Contacts</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">
              <button className="btn btn-outline-dark px-4 py-2">
                Let's Talk
              </button>
            </Nav.Link>
          </Nav>
        </NavbarElm.Collapse>
      </NavbarElm>
    );
  }
}

export default Navbar;
