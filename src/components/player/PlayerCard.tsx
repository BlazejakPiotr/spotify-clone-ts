import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Radio } from "../../types/Radio";
import { Artist } from "../../types/Artist";
import { Album } from "../../types/Album";
import { CardProp } from "./PlayerCardContainer";

interface PlayerCardProps {
  data: CardProp;
  name?: string;
}
const PlayerCard: React.FC<PlayerCardProps> = ({ data, name }) => {
  return (
    <Link to={`${data.type}/${data.id}`}>
      <Card className="h-100">
        <Card.Img
          variant="top"
          src={data.picture_medium || data.cover_medium}
        />
        <Card.Body className="p-0">
          <Card.Title>{data.name || data.title}</Card.Title>
          <Card.Text>{data.type}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default PlayerCard;
