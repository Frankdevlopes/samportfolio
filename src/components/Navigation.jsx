import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" fixed="top" className="navbar">
      <div className="container">
        <Navbar.Brand href="#page-top">Learning Never Ends</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#portfolio"></Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#team">Service types</Nav.Link>
            <Nav.Link href="#contact"></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default Navigation;
