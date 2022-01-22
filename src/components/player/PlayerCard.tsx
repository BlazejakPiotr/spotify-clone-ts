import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const PlayerCard = () => {
  return (
    <Link to="artist/213">
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
    </Link>
  );
};

export default PlayerCard;
