import { Col, Container, Row } from "react-bootstrap";
import PlayerSidebar from "./PlayerSidebar";
import "./player.css";
import PlayerBar from "./PlayerBar";

const PlayerApp = () => {
  return (
    <Container fluid>
      <Row className="player-container d-flex">
        <Col className="sidebar-wrapper">
          <PlayerSidebar />
        </Col>
        <Col>content</Col>
      </Row>
      <Row>
        <Col className="p-0">
          <PlayerBar />
        </Col>
      </Row>
    </Container>
  );
};

export default PlayerApp;
