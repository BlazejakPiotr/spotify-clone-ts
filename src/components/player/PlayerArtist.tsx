import { Col, Container } from "react-bootstrap";
import { faEllipsisH, faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import {
  getAlbumList,
  getArtist,
  getRelatedToArtist,
  getTracklist,
  setSelectedSong,
} from "../../actions";
import { AppState } from "../../store";
import PlayerSongItem from "./PlayerSongItem";
import { Track } from "../../types/Track";
import PlayerCardContainer from "./PlayerCardContainer";
import { Artist } from "../../types/Artist";
import { Album } from "../../types/Album";
import { Dispatch } from "redux";

const PlayerArtist = () => {
  const dispatch = useDispatch();
  const artist: Artist = useSelector(
    (state: AppState) => state.player.data.artist
  );
  const tracklist: Track[] = useSelector(
    (state: AppState) => state.player.data.tracklist.data
  );
  const albums = useSelector(
    (state: AppState) => state.player.data.albums.data
  );
  const related = useSelector(
    (state: AppState) => state.player.data.related.data
  );

  let { artistID } = useParams();

  useEffect(() => {
    dispatch(getArtist(artistID as string));
  }, []);

  useEffect(() => {
    dispatch(getTracklist(artistID as string));
  }, []);

  useEffect(() => {
    dispatch(getAlbumList(artistID as string));
  }, []);

  useEffect(() => {
    dispatch(getRelatedToArtist(artistID as string));
  }, []);

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
          <div className="album-songs mb-2">
            {tracklist?.slice(0, 10).map((song: Track, index: number) => (
              <PlayerSongItem key={song.id} data={song} index={index} />
            ))}
          </div>
        </Col>
      </div>
      <div className="px-4">
        <PlayerCardContainer title="Albums" data={albums} />
        <PlayerCardContainer title="Related artists" data={related} />
      </div>
    </Container>
  );
};

export default PlayerArtist;
