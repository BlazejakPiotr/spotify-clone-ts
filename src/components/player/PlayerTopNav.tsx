import {
  faChevronCircleLeft,
  faChevronCircleRight,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Dropdown, DropdownButton, Navbar } from "react-bootstrap";

const PlayerTopNav = () => {
  return (
    <Navbar sticky="top" className="top-navbar">
      <Container fluid>
        <div className="top-left-nav">
          <button>
            <span>
              <FontAwesomeIcon icon={faChevronLeft} />
            </span>
          </button>
          <button>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
        <div className="top-right-nav d-flex align-items-center">
          <button>PREMIUM</button>
          <Dropdown align={{ lg: "end" }}>
            <Dropdown.Toggle id="user-dropdown-btn">
              <img
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                alt="profile-pic"
              />
              hglock
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item eventKey="1">Red</Dropdown.Item>
              <Dropdown.Item eventKey="2">Blue</Dropdown.Item>
              <Dropdown.Item eventKey="3" active>
                Orange
              </Dropdown.Item>
              <Dropdown.Item eventKey="1">Red-Orange</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Container>
    </Navbar>
  );
};

export default PlayerTopNav;
