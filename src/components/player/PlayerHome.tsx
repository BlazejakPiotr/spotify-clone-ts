import { Col, Container, Row } from "react-bootstrap";

import PlayerCardContainer from "./PlayerCardContainer";

const PlayerHome = () => {
  return (
    <Container fluid>
      <Row>
        <Col>test</Col>
      </Row>
      <PlayerCardContainer />
      <PlayerCardContainer />
      <PlayerCardContainer />
    </Container>
  );
};

export default PlayerHome;
