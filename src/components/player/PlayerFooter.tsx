import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Container, Row } from "react-bootstrap";

const PlayerFooter = () => {
  return (
    <Container fluid>
      <div className="player-footer">
        <Row className="px-4">
          <Col md={4} lg={2}>
            <h6>COMPANY</h6>

            <p>
              <a href="#">About</a>
            </p>
            <p>
              <a href="#">Jobs</a>
            </p>
            <p>
              <a href="#">For the Record</a>
            </p>
          </Col>
          <Col md={4} lg={2}>
            <h6>COMMUNITIES</h6>

            <p>
              <a href="#">For Artists</a>
            </p>
            <p>
              <a href="#">Developers</a>
            </p>
            <p>
              <a href="#">Advertising</a>
            </p>
            <p>
              <a href="#">Investors</a>
            </p>
            <p>
              <a href="#">Vendors</a>
            </p>
          </Col>
          <Col md={4} lg={2}>
            <h6>USEFUL LINKS</h6>

            <p>
              <a href="#">Support</a>
            </p>
            <p>
              <a href="#">Web Player</a>
            </p>
            <p>
              <a href="#">Free Mobile App</a>
            </p>
          </Col>
          <Col className="social-icons-container text-end">
            <button>
              <FontAwesomeIcon icon={faInstagram} />
            </button>

            <button>
              <FontAwesomeIcon icon={faTwitter} />
            </button>

            <button>
              <FontAwesomeIcon icon={faFacebookF} />
            </button>
          </Col>
        </Row>
        <Row>
          <Col xs={10} className=" d-flex align-items-end">
            <ul className="bottom-bar">
              <li>
                <a href="#">Legal</a>
              </li>
              <li>
                <a href="#">Privacy Center</a>
              </li>
              <li>
                <a href="#">Privacy policy</a>
              </li>
              <li>
                <a href="#">Cookies</a>
              </li>
              <li>
                <a href="#">About Ads</a>
              </li>
            </ul>
          </Col>
          <Col className="bottom-bar text-end">
            <p style={{ fontSize: "0.65rem" }}>© 2022 Spotify AB</p>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default PlayerFooter;
