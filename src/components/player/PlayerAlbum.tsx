import {
  faClock,
  faEllipsisH,
  faHeart,
  faPlayCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "react-bootstrap";

const PlayerAlbum = () => {
  return (
    <Container fluid className="pt-5">
      <div className="mb-3 d-flex">
        <div className="mt-5">
          <img
            src="https://i.scdn.co/image/ab67616d0000b27340135d559b698bf8555c7c03"
            alt="album-pic"
            className="album-pic"
          />
        </div>
        <div className="album-info">
          <h6>ALBUM</h6>
          <h1>GNIEW</h1>
          <div className="d-flex">
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
              alt="profile-pic"
              className="album-profile-pic"
            />
            <h6>O.S.T.R.</h6>
            <span>• 2020 • 16 songs, 57 min 30 sec</span>
          </div>
        </div>
      </div>
      <div className="py-3 d-flex align-items-center">
        <FontAwesomeIcon icon={faPlayCircle} size="4x" color="#1DB954" />
        <FontAwesomeIcon
          icon={faHeart}
          size="2x"
          color="#aaaaaa"
          className="mx-5"
        />
        <FontAwesomeIcon icon={faEllipsisH} size="2x" color="#aaaaaa" />
      </div>
      <div className="album-songs mb-5">
        <div>
          <div>#</div>
          <div className="w-75">TITLE</div>
          <div>
            <FontAwesomeIcon icon={faClock} />
          </div>
        </div>
        <hr className="my-3" />
        <SongItem />
        <SongItem />
        <SongItem />
        <SongItem />
        <SongItem />
      </div>
      <div className="my-4 album-credits">
        <p>© 2022 Asfalt Records</p>
        <p>℗ 2022 Asfalt Records</p>
      </div>

      {/* <PlayerCardContainer /> */}
    </Container>
  );
};

export default PlayerAlbum;

export const SongItem = () => {
  return (
    <div className="song-item">
      <div>1</div>
      <div className="w-75">
        <h6>Preambuła</h6>
        <p>O.S.T.R.</p>
      </div>
      <div>2:21</div>
    </div>
  );
};
