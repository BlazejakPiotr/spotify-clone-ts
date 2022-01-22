import { Col, Container, Row } from "react-bootstrap";

import PlayerCardContainer from "./PlayerCardContainer";

const PlayerHome = () => {
  return (
    <Container fluid className="pt-5">
      <Row className="pt-4">
        <Col>test</Col>
      </Row>
      <PlayerCardContainer title="Recently Played" />
      <PlayerCardContainer title="Popular Artists" />
      <PlayerCardContainer title="Popular Albums" />
    </Container>
  );
};

export default PlayerHome;
