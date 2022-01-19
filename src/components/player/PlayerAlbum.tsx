import { Col, Container, Row } from "react-bootstrap";

const PlayerAlbum = () => {
  return (
    <Container fluid>
      <div className="mt-5 d-flex">
        <div>
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
    </Container>
  );
};

export default PlayerAlbum;
