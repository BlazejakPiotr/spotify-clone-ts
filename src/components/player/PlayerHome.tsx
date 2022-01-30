import { Col, Container, Row } from "react-bootstrap";

import PlayerCardContainer from "./PlayerCardContainer";

interface PlayerHomeProps {}

const PlayerHome = () => {
  return (
    <Container fluid className="pt-5">
      <Row className="mt-5" style={{ gap: "16px" }}>
        <div className="mb-3">
          <h4 style={{ margin: "0px" }}></h4>
          <a href="#">SEE ALL</a>
        </div>
        <div
          className="d-flex justify-content-between "
          style={{ gap: "24px" }}
        >
          <PlayerCardSmall />

          <PlayerCardSmall />

          <PlayerCardSmall />

          <PlayerCardSmall />
        </div>
      </Row>
      <PlayerCardContainer />
      <PlayerCardContainer title="Popular Artists" />
      <PlayerCardContainer title="Popular Albums" />
    </Container>
  );
};

export default PlayerHome;

const PlayerCardSmall = () => {
  return (
    <Col lg={4} className="small-card-container">
      <img
        src="https://ecsmedia.pl/c/zycie-po-smierci-w-iext103681545.jpg"
        alt="Card-image"
      />
      <h5 style={{ marginBottom: "0px" }}>O.S.T.R.</h5>
    </Col>
  );
};
