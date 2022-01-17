import { Col, Container, Row } from "react-bootstrap";
import PlayerSidebar from "./PlayerSidebar";
import "./player.css";

const PlayerApp = () => {
  return (
    <Container fluid>
      <Row className="player-container">
        <Col xs={2} className="p-0 ">
          <PlayerSidebar />
        </Col>
        <Col className="p-0">content</Col>
        <div className="playerbar-container">Player</div>
      </Row>
    </Container>
  );
};

export default PlayerApp;
