import { Col, Container, Row } from "react-bootstrap";
import {
  faClock,
  faEllipsisH,
  faHeart,
  faPlayCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SongItem } from "./PlayerAlbum";
import PlayerCardContainer from "./PlayerCardContainer";

const PlayerArtist = () => {
  return (
    <Container fluid className="p-0">
      <div className="artist-photo-container">
        <div
          style={{
            backgroundImage: `url("https://e-cdns-images.dzcdn.net/images/artist/a7a67691dd35f83ca6fe0a4bd54f8c0d/1000x1000-000000-80-0-0.jpg")`,
          }}
        >
          <div className="artist-photo-gradient">
            <div>
              <h1>O.S.T.R.</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="py-3 d-flex align-items-center">
          <FontAwesomeIcon icon={faPlayCircle} size="4x" color="#1DB954" />
          <button className="mx-5 follow-btn">FOLLOW</button>{" "}
          <FontAwesomeIcon icon={faEllipsisH} size="2x" color="#aaaaaa" />
        </div>
        <h4>Popular</h4>
        <Col xs={10}>
          <div className="album-songs mb-5">
            <SongItem />
            <SongItem />
            <SongItem />
            <SongItem />
            <SongItem />
          </div>
        </Col>
        <PlayerCardContainer />
        <PlayerCardContainer />
        <PlayerCardContainer />
      </div>
    </Container>
  );
};

export default PlayerArtist;
