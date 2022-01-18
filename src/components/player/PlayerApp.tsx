import { Col, Container, Row } from "react-bootstrap";
import PlayerSidebar from "./PlayerSidebar";
import "./player.css";
import PlayerBar from "./PlayerBar";
import PlayerTopNav from "./PlayerTopNav";

const PlayerApp = () => {
  return (
    <>
      <Container fluid>
        <Row className="player-container d-flex">
          <Col className="sidebar-wrapper">
            <PlayerSidebar />
          </Col>
          <Col className="p-0">
            <PlayerTopNav />
          </Col>
        </Row>
      </Container>
      <PlayerBar />
    </>
  );
};

export default PlayerApp;
