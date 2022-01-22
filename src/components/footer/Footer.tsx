import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Row } from "react-bootstrap";
import "./footer.css";

export const FooterSocials = () => {
  return (
    <>
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
    </>
  );
};

export const FooterLogo = () => {
  return (
    <Col md={12} lg={2}>
      <img
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
        alt="logo"
        className="spotify-logo"
      />
    </Col>
  );
};

export const FooterLinks = () => {
  return (
    <>
      <Col md={12} lg={2}>
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
      <Col md={12} lg={2}>
        <h6>COMMUNITIES</h6>

        <p>
          <a href="#">For Artists</a>
        </p>
        <p>
          <a href="/">Developers</a>
        </p>
        <p>
          <a href="/">Advertising</a>
        </p>
        <p>
          <a href="/">Investors</a>
        </p>
        <p>
          <a href="/">Vendors</a>
        </p>
      </Col>
      <Col md={12} lg={2}>
        <h6>USEFUL LINKS</h6>

        <p>
          <a href="/">Support</a>
        </p>
        <p>
          <a href="/">Web Player</a>
        </p>
        <p>
          <a href="/">Free Mobile App</a>
        </p>
      </Col>
    </>
  );
};

export const FooterHorizontalLinks = () => {
  return (
    <Row>
      <Col md={12} lg={6} className=" d-flex align-items-end mt-5">
        <ul className="bottom-bar">
          <li>
            <a href="/">Legal</a>
          </li>
          <li>
            <a href="/">Privacy Center</a>
          </li>
          <li>
            <a href="/">Privacy policy</a>
          </li>
          <li>
            <a href="/">Cookies</a>
          </li>
          <li>
            <a href="/">About Ads</a>
          </li>
        </ul>
      </Col>
      <Col md={12} lg={6} className="bottom-bar text-end mt-5">
        <p>
          <a href="/" style={{ cursor: "pointer" }}>
            <FontAwesomeIcon
              icon={faGlobeAmericas}
              style={{ marginRight: "6px" }}
            />
            United Kingdom
          </a>
        </p>
        <p style={{ fontSize: "0.65rem" }}>© 2022 Spotify AB</p>
      </Col>
    </Row>
  );
};
