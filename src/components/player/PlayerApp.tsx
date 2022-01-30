import { Col, Container, Row } from "react-bootstrap";
import PlayerSidebar from "./PlayerSidebar";
import "./player.css";
import PlayerBar from "./PlayerBar";
import PlayerTopNav from "./PlayerTopNav";
import PlayerHome from "./PlayerHome";
import PlayerAlbum from "./PlayerAlbum";
import {
  FooterHorizontalLinks,
  FooterLinks,
  FooterSocials,
} from "../footer/Footer";
import PlayerArtist from "./PlayerArtist";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { Artist } from "../../types/Artist";
import { Album } from "../../types/Album";

const apiKey: string = process.env.REACT_APP_apiKey as string;
const apiHost: string = process.env.REACT_APP_apiHost as string;
const endpointsArr: string[] = ["album/", "artist/", "genere/", "radio/"];

const PlayerApp = () => {
  const fetchData = async () => {
    try {
      let response = await fetch(
        "https://deezerdevs-deezer.p.rapidapi.com/radio/top",
        {
          method: "GET",
          headers: { "x-rapidapi-host": apiHost, "x-rapidapi-key": apiKey },
        }
      );
      if (response.ok) {
        const responseData: Album[] = await response.json();
        console.log(responseData);
      } else {
        console.log("Something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <Container fluid>
        <Row className=" d-flex">
          <Col className="sidebar-wrapper">
            <PlayerSidebar />
          </Col>
          <Col className="p-0 content-wrapper">
            <PlayerTopNav />
            <div className=" player-container">
              <Routes>
                <Route path="/" element={<PlayerHome />} />
                <Route path="album/:albumID" element={<PlayerAlbum />} />
                <Route path="artist/:artistID" element={<PlayerArtist />} />
              </Routes>
            </div>

            <footer>
              <div className="footer-container ">
                <Row>
                  <FooterLinks />
                  <FooterSocials />
                  <FooterHorizontalLinks />
                </Row>
              </div>
            </footer>
          </Col>
        </Row>
      </Container>
      <PlayerBar />
    </>
  );
};

export default PlayerApp;
