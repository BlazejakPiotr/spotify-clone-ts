import { Col, Container, Row } from "react-bootstrap";
import PlayerCard from "./PlayerCard";

const PlayerHome = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <PlayerCard />
        </Col>
        <Col>
          <PlayerCard />
        </Col>
        <Col>
          <PlayerCard />
        </Col>
        <Col>
          <PlayerCard />
        </Col>
        <Col>
          <PlayerCard />
        </Col>
        <Col>
          <PlayerCard />
        </Col>
        <Col>
          <PlayerCard />
        </Col>
      </Row>
    </Container>
  );
};

export default PlayerHome;
