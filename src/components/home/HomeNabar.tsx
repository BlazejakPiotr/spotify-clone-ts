import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const HomeNavbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
            alt="logo"
            className="spotify-logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto"></Nav>
          <Nav>
            <Nav.Link>
              <Link to="/login">Premium </Link>
            </Nav.Link>

            <Nav.Link>
              <Link to="/login">Support</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/login">Download</Link>
            </Nav.Link>
            <p style={{ padding: "28px 17px", marginBottom: "0px" }}>|</p>
            <Nav.Link>
              <Link to="/login">Sign up</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/login">Log in</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HomeNavbar;
