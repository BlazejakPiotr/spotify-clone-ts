import { Col, Row } from "react-bootstrap";
import PlayerCard from "./PlayerCard";

interface PlayerCardContainerProps {
  title?: string;
}

const PlayerCardContainer = ({ title }: PlayerCardContainerProps) => {
  return (
    <Row className="mt-5">
      <div className="card-container-heading mb-3">
        <h4 style={{ margin: "0px" }}>{title}</h4>
        <a href="#">SEE ALL</a>
      </div>
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
  );
};
export default PlayerCardContainer;
