import "./login.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faApple,
  faFacebookSquare,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";

const Login = () => {
  return (
    <div>
      <img
        src="https://www.edigitalagency.com.au/wp-content/uploads/Spotify-Logo-png-RGB-Black.png"
        alt="logo"
        className="spotify-logo my-3"
      />
      <hr />
      <Container>
        <Row className="justify-content-center">
          <Col sm={8} md={7} lg={6} xl={5} className="mt-3">
            <p>To continue, log in to Spotify.</p>
            <div className="d-flex flex-column mb-2">
              <button style={{ backgroundColor: "#3B5998" }}>
                <FontAwesomeIcon icon={faFacebookSquare} />
                CONTINUE WITH FACEBOOK
              </button>
              <button style={{ backgroundColor: "#000" }}>
                <FontAwesomeIcon icon={faApple} />
                CONTINUE WITH APPLE
              </button>
              <button style={{ backgroundColor: "#fff", color: "#6A6A6A" }}>
                <FontAwesomeIcon icon={faGoogle} />
                CONTINUE WITH GOOGLE
              </button>
            </div>
            <Row className="d-flex justify-content-between mb-3">
              <Col style={{ position: "relative" }}>
                <hr style={{ margin: "8px 0px" }} />
              </Col>
              <Col xs={1} className="p-0">
                <p>OR</p>
              </Col>
              <Col>
                <hr style={{ margin: "8px 0px" }} />
              </Col>
            </Row>
            <Form className="text-start">
              <Form.Group className="mb-3" controlId="Email">
                <Form.Label>Email address or username</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Email address or username"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="Password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <p style={{ marginBottom: "0px" }}>
                <a href="#">Forgot your password?</a>
              </p>
              <div className="d-flex justify-content-between">
                <Form.Group
                  className="mb-3 d-flex align-items-center"
                  controlId="Checkbox"
                >
                  <Form.Check type="checkbox" label="Remember me" />
                </Form.Group>
                <button className="login-btn">LOG IN</button>
              </div>
            </Form>
            <hr />
            <div className="d-flex flex-column my-4">
              <h6 className="mb-4" style={{ fontWeight: "700" }}>
                Don't have an account?
              </h6>

              <button style={{ backgroundColor: "#fff", color: "#6A6A6A" }}>
                SIGN UP FOR SPOTIFY
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
