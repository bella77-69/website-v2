import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./Nav.scss";
import logo from "../../assets/logo/logo.jpg";

export default function Header() {
  return (
    <div className="nav">
      <Navbar expand="lg">
        <Container className="nav-container">
          <Navbar.Brand href="/" className="nav-logo">
            <img
              className="d-inline-block align-middle"
              width="200"
              height="auto"
              alt="logo-img"
              src={logo}
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/" className="nav-link">
              Home
            </Nav.Link>
            <Nav.Link href="/about" className="nav-link">
              About
            </Nav.Link>
            <Nav.Link href="/projects" className="nav-link">
              Projects
            </Nav.Link>
            <Nav.Link href="/contact" className="nav-link">
              Contact
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}