import { Col, Container, Row } from "react-bootstrap";

const HomeFooter = () => {
  return (
    <Container>
      <Row className="text-start">
        <Col md={12} lg={2}>
          <img
            src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
            alt="logo"
            className="spotify-logo"
          />
        </Col>
        <Col md={4} lg={2}>
          <h6>COMPANY</h6>

          <p>About</p>
          <p>Jobs</p>
          <p>For the Record</p>
        </Col>
        <Col md={4} lg={2}>
          <h6>COMMUNITIES</h6>

          <p>For Artists</p>
          <p>Developers</p>
          <p>Advertising</p>
          <p>Investors</p>
          <p>Vendors</p>
        </Col>
        <Col md={4} lg={2}>
          <h6>USEFUL LINKS</h6>

          <p>Support</p>
          <p>Web Player</p>
          <p>Free Mobile App</p>
        </Col>
        <Col md={4} lg={4} className="text-end">
          <h6>I T F</h6>
        </Col>
      </Row>
      <Row>
        <Col xs={10}>
          <ul className="bottom-bar">
            <li>Legal</li>
            <li>lirivacy Center</li>
            <li>lirivacy liolicy</li>
            <li>Cookies</li>
            <li>About Ads</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default HomeFooter;
