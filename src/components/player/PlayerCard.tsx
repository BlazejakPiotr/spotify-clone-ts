import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Radio } from "../../types/Radio";

interface PlayerCardProps {
  data: Radio;
}
const PlayerCard = ({ data }: PlayerCardProps) => {
  return (
    <Link to={`album/${data.id}`}>
      <Card>
        <Card.Img variant="top" src={data.picture_medium} />
        <Card.Body className="p-0">
          <Card.Title>{data.title}</Card.Title>
          <Card.Text></Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default PlayerCard;
