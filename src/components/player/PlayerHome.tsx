import { Col, Container, Row } from "react-bootstrap";

import PlayerCardContainer from "./PlayerCardContainer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getArtist,
  getRelatedToArtist,
  getTopRadioPlaylists,
} from "../../actions";
import { AppState } from "../../store";

const PlayerHome = () => {
  const dispatch = useDispatch();
  const initialData = useSelector((state: AppState) => state.player.data);

  useEffect(() => {
    dispatch(getTopRadioPlaylists());
  }, [initialData.radios.error!]);

  useEffect(() => {
    dispatch(getArtist("13"));
  }, [initialData.artist.error!]);

  useEffect(() => {
    dispatch(getRelatedToArtist(initialData.artist.id!));
  }, [initialData.related]);
  return (
    <Container fluid className="pt-5">
      <Row className="mt-5" style={{ gap: "16px" }}>
        <div
          className="d-flex justify-content-between "
          style={{ gap: "24px" }}
        >
          {/*
          <PlayerCardSmall />

          <PlayerCardSmall />
          
          <PlayerCardSmall />

          <PlayerCardSmall /> */}
        </div>
      </Row>
      <PlayerCardContainer
        title={`Top Radios`}
        data={initialData.radios.data!}
      />
      <PlayerCardContainer
        title={`Related artists to ${initialData.artist.name}`}
        data={initialData.related.data!}
      />
      {/* <PlayerCardContainer title="Popular Albums" /> */}
    </Container>
  );
};

export default PlayerHome;

const PlayerCardSmall = () => {
  return (
    <Col lg={4} className="small-card-container">
      <img
        src="https://ecsmedia.pl/c/zycie-po-smierci-w-iext103681545.jpg"
        alt="Card-image"
      />
      <h5 style={{ marginBottom: "0px" }}>O.S.T.R.</h5>
    </Col>
  );
};
