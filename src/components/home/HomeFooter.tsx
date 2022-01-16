import { Col, Container, Row } from "react-bootstrap";

const HomeFooter = () => {
  return (
    <Container>
      <Row>
        <Col md={12} lg={2} className="text-start">
          <img
            src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
            alt="logo"
            className="spotify-logo"
          />
        </Col>
        <Col md={4} lg={2}>
          <h6>section title</h6>
        </Col>
        <Col md={4} lg={2}>
          <h6>section title</h6>
        </Col>
        <Col md={4} lg={2}>
          <h6>section title</h6>
        </Col>
        <Col md={4} lg={4}>
          <h6>ICON ICON ICON</h6>
        </Col>
      </Row>
    </Container>
  );
};

export default HomeFooter;
