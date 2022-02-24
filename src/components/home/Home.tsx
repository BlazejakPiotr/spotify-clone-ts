import { Col, Container, Row } from "react-bootstrap";
import {
  FooterHorizontalLinks,
  FooterLinks,
  FooterLogo,
  FooterSocials,
} from "../footer/Footer";

import HomeNavbar from "./HomeNabar";
import "./home.css";
import { Link } from "react-router-dom";

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
              <Link to="/login">
                <button className="home-btn">GET SPOTIFY FREE</button>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
      <footer>
        <Container className="home-footer">
          <Row className="text-start mb-5">
            <FooterLogo />
            <FooterLinks />
            <FooterSocials />
            <FooterHorizontalLinks />
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Home;
