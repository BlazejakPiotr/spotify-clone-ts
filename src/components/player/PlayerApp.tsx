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

const PlayerApp = () => {
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
