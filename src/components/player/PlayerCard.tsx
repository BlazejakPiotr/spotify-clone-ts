import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Radio } from "../../types/Radio";
import { Artist } from "../../types/Artist";

interface PlayerCardProps {
  data: Radio | Artist;
  name: string;
}
const PlayerCard = ({ data, name }: PlayerCardProps) => {
  return (
    <Link to={`${data.type}/${data.id}`}>
      <Card>
        <Card.Img variant="top" src={data.picture_medium} />
        <Card.Body className="p-0">
          <Card.Title>{name}</Card.Title>
          <Card.Text>{data.type}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default PlayerCard;
