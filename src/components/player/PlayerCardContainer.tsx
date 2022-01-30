import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Album } from "../../types/Album";
import { Radio } from "../../types/Radio";
import PlayerCard from "./PlayerCard";

interface PlayerCardContainerProps {
  title?: string;
  data?: Radio[];
}

const PlayerCardContainer = ({ title, data }: PlayerCardContainerProps) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [playlists, setPlaylists] = useState(data);

  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenWidth < 768) setPlaylists(data?.slice(0, 2));
    if (screenWidth > 768 && screenWidth < 992) setPlaylists(data?.slice(0, 3));
    if (screenWidth > 992 && screenWidth < 1200)
      setPlaylists(data?.slice(0, 5));
    if (screenWidth > 1200 && screenWidth < 1400)
      setPlaylists(data?.slice(0, 6));
    if (screenWidth > 1400) setPlaylists(data?.slice(0, 8));
  }, [screenWidth]);

  return (
    <>
      <div className="card-container-heading mb-3 mt-5">
        <h4 style={{ margin: "0px" }}>{title}</h4>
        SEE ALL
      </div>
      <Row>
        {playlists?.map((playlist) => (
          <Col key={playlist.id}>
            <PlayerCard data={playlist} />
          </Col>
        ))}
      </Row>
    </>
  );
};
export default PlayerCardContainer;
