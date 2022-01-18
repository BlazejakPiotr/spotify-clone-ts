import { Container, Row } from "react-bootstrap";

import PlayerCardContainer from "./PlayerCardContainer";

const PlayerHome = () => {
  return (
    <Container fluid>
      <PlayerCardContainer />
      <PlayerCardContainer />
      <PlayerCardContainer />
    </Container>
  );
};

export default PlayerHome;
