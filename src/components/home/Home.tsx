import { Col, Container, Row } from "react-bootstrap";
import HomeFooter from "./HomeFooter";
import HomeNavbar from "./HomeNabar";
import "./home.css";

const Home = () => {
  return (
    <>
      <div className="navbar-container">
        <HomeNavbar />
      </div>
      <div className="home-container">
        <Container className="d-flex justify-content-center">
          <Row>
            <Col>
              <h1>Listening is </h1>
              <h1 className="text-end mb-4">everything</h1>
              <p className="mb-5">
                Milions of songs and podcasts. No credit card needed.
              </p>
              <button className="home-btn">GET SPOTIFY FREE</button>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="home-footer">
        <HomeFooter />
      </div>
    </>
  );
};

export default Home;
