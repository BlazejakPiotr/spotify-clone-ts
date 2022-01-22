import { Button, Col, Container, Row } from "react-bootstrap";
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
import { useEffect } from "react";

const api = "https://deezerdevs-deezer.p.rapidapi.com/";
const apiKey: string = process.env.REACT_APP_apiKey as string;
const apiHost: string = process.env.REACT_APP_apiHost as string;

const PlayerApp = () => {
  useEffect(() => {
    const fetchGenere = async () => {
      try {
        let response = await fetch(api + "genre/reggae/artists", {
          method: "GET",
          headers: { "x-rapidapi-host": apiHost, "x-rapidapi-key": apiKey },
        });
        if (response.ok) {
          let fetchedRadios = await response.json();
          console.log(fetchedRadios);
        }
      } catch (error) {}
    };
    fetchGenere();
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
