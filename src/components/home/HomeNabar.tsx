import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

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
            <Nav.Link href="#">Premium</Nav.Link>
            <Nav.Link href="#">Support</Nav.Link>
            <Nav.Link href="#">Download</Nav.Link>
            <p style={{ padding: "28px 17px", marginBottom: "0px" }}>|</p>
            <Nav.Link href="#">Sign up</Nav.Link>
            <Nav.Link href="#">Log in</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HomeNavbar;
