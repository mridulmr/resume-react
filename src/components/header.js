import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-white">
      <Container className="ak-nav-container">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Contact</Nav.Link>
          </Nav>
          <Nav className="me-auto">
            <Navbar.Brand href="#home">
              <img src="https://moonex.ibthemespro.com/assets/img/root/logo-center-dark.png" />
            </Navbar.Brand>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">i</Nav.Link>
            <Nav.Link href="#memes">i</Nav.Link>
            <Nav.Link href="#deets">i</Nav.Link>
            <Nav.Link href="#memes">i</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
