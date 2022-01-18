import { Card } from "react-bootstrap";

const PlayerCard = () => {
  return (
    <a href="#">
      <Card>
        <Card.Img
          variant="top"
          src="https://i.scdn.co/image/ab67656300005f1f2c97be99a6def3cda2ed44e2"
        />
        <Card.Body className="p-0">
          <Card.Title>GNIEW</Card.Title>
          <Card.Text>O.S.T.R.</Card.Text>
        </Card.Body>
      </Card>
    </a>
  );
};

export default PlayerCard;
