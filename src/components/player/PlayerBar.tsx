import {
  faBackward,
  faBars,
  faExpand,
  faForward,
  faHeart,
  faLaptopHouse,
  faPlayCircle,
  faRandom,
  faRedo,
  faVolumeUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ProgressBar } from "react-bootstrap";

const PlayerBar = () => {
  return (
    <div className="playerbar-container">
      <div className="playerbar-song">
        <img
          src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/artistic-album-cover-design-template-d12ef0296af80b58363dc0deef077ecc_screen.jpg?ts=1561488440"
          alt=""
        />
        <div className="d-flex flex-column justify-content-center">
          <h6>Pokaż mi hajs</h6>
          <p className="text-muted" style={{ fontSize: "0.7rem" }}>
            Donguralesko, Shellerini, Tailor Cut, Sydoz, DJ Flip
          </p>
        </div>
        <div className="d-flex align-items-center">
          <button>
            <FontAwesomeIcon icon={faHeart} />
          </button>
          <button>
            <FontAwesomeIcon icon={faExpand} />
          </button>
        </div>
      </div>

      <div className="playerbar-controls">
        <div className="playerbar-controls-buttons d-flex">
          <button className="playerbar-additonal-btn">
            <FontAwesomeIcon icon={faRandom} />
          </button>
          <button>
            <FontAwesomeIcon icon={faBackward} />
          </button>
          <button style={{ width: "48px", color: "#fff" }}>
            <FontAwesomeIcon icon={faPlayCircle} size="2x" />
          </button>
          <button>
            <FontAwesomeIcon icon={faForward} />
          </button>
          <button className="playerbar-additonal-btn">
            <FontAwesomeIcon icon={faRedo} />
          </button>
        </div>
        <div className="playerbar-progress-bar">
          <div>0:00</div>
          <div className="w-100 px-3">
            <ProgressBar now={35} />
          </div>
          <div>4:00</div>
        </div>
      </div>

      <div className="player-bar-volume">
        <button>
          <FontAwesomeIcon icon={faBars} />
        </button>
        <button>
          <FontAwesomeIcon icon={faLaptopHouse} />
        </button>
        <div className="d-flex align-items-center">
          <button>
            <FontAwesomeIcon icon={faVolumeUp} />
          </button>
          <div>
            <ProgressBar now={35} style={{ width: "90px" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerBar;
