import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Album } from "../../types/Album";
import { Artist } from "../../types/Artist";
import { Radio } from "../../types/Radio";

import PlayerCard from "./PlayerCard";

type FetchData = Radio[] | Artist[] | Album[];

interface PlayerCardContainerProps {
  title: string;
  data: FetchData;
}

export interface CardProp {
  id: number;
  name?: string;
  title?: string;
  picture_medium?: string;
  cover_medium?: string;
  type: string;
}

const PlayerCardContainer: React.FC<PlayerCardContainerProps> = ({
  title,
  data,
}) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [cardsToDisplay, setCardsToDisplay] = useState(7);

  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [screenWidth]);

  function calcCardsToDisplay() {
    if (screenWidth < 768) setCardsToDisplay(2);
    if (screenWidth > 768 && screenWidth < 992) setCardsToDisplay(3);
    if (screenWidth > 992 && screenWidth < 1200) setCardsToDisplay(4);
    if (screenWidth > 1200 && screenWidth < 1400) setCardsToDisplay(5);
    if (screenWidth > 1400 && screenWidth < 1750) setCardsToDisplay(6);
    if (screenWidth > 1750) setCardsToDisplay(7);
  }

  useEffect(() => {
    calcCardsToDisplay();
  }, [screenWidth]);
  return (
    <>
      <div className="card-container-heading mb-3 mt-5">
        <h4 style={{ margin: "0px" }}>{title}</h4>
        SEE ALL
      </div>
      <Row>
        {data?.slice(0, cardsToDisplay).map((card) => (
          <Col key={card.id}>
            <PlayerCard data={card} />{" "}
          </Col>
        ))}
      </Row>
    </>
  );
};

export default PlayerCardContainer;
