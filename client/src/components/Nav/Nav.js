import { Navbar, Nav, Container } from "react-bootstrap";
import "./Nav.scss";
import logo from "../../assets/logo/logo.png";

export default function Header() {
  return (
    <div className="nav">
      <Navbar bg="transparent" expand="lg">
        <Container className="nav-container">
          <Navbar.Brand href="/">
            <img
              className="nav-logo d-inline-block align-middle mr-2"
              width="200"
              alt="logo-img"
              src={logo}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/" className="nav-bar">
                Home
              </Nav.Link>
              <Nav.Link href="/about" className="nav-bar">
                About
              </Nav.Link>
              <Nav.Link href="/projects" className="nav-bar">
                Projects
              </Nav.Link>
              <Nav.Link href="/contact" className="nav-bar">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
