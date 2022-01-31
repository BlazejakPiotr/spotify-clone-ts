import { Col, Container } from "react-bootstrap";
import { faEllipsisH, faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getArtist, getTracklist } from "../../actions";
import { AppState } from "../../store";
import PlayerSongItem from "./PlayerSongItem";
import { Track } from "../../types/Track";
import PlayerCardContainer from "./PlayerCardContainer";

const PlayerArtist = () => {
  const dispatch = useDispatch();
  const artist = useSelector((state: AppState) => state.player.data.artist);
  const tracklist = useSelector(
    (state: AppState) => state.player.data.tracklist
  );
  let { artistID } = useParams();

  useEffect(() => {
    dispatch(getArtist(artistID as string));
  }, [artist.error!]);

  useEffect(() => {
    dispatch(getTracklist(artistID as string));
  }, [tracklist.error!]);

  const [data, setData] = useState(tracklist.data!);
  return (
    <Container fluid className="p-0">
      <div className="artist-photo-container">
        <div
          style={{
            backgroundImage: `url("${artist.picture_xl!}")`,
          }}
        >
          <div className="artist-photo-gradient">
            <div>
              <h1>{artist.name}</h1>
              <p>Artist has {artist.nb_fan} fans</p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="py-3 d-flex align-items-center">
          <FontAwesomeIcon icon={faPlayCircle} size="4x" color="#1DB954" />
          <button className="mx-5 follow-btn">FOLLOW</button>
          <FontAwesomeIcon icon={faEllipsisH} size="2x" color="#aaaaaa" />
        </div>
        <h4 style={{ fontWeight: "700" }}>Popular</h4>
        <Col xs={10}>
          <div className="album-songs mb-5">
            {data.slice(0, 9).map((song: Track, index: number) => (
              <PlayerSongItem key={song.id} data={song} index={index} />
            ))}
          </div>
        </Col>
      </div>
      <div>
        <PlayerCardContainer title="Albums" />
      </div>
    </Container>
  );
};

export default PlayerArtist;
