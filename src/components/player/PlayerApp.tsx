import { Col, Container, Row } from "react-bootstrap";
import PlayerSidebar from "./PlayerSidebar";
import "./player.css";
import PlayerBar from "./PlayerBar";
import PlayerTopNav from "./PlayerTopNav";
import PlayerHome from "./PlayerHome";
import PlayerAlbum from "./PlayerAlbum";
import PlayerFooter from "./PlayerFooter";

const PlayerApp = () => {
  return (
    <>
      <Container fluid>
        <Row className=" d-flex">
          <Col className="sidebar-wrapper">
            <PlayerSidebar />
          </Col>
          <Col className="p-0">
            <div className=" player-container">
              <PlayerTopNav />
              {/* <PlayerHome /> */}
              <PlayerAlbum />
            </div>
            <PlayerFooter />
          </Col>
        </Row>
      </Container>
      <PlayerBar />
    </>
  );
};

export default PlayerApp;
