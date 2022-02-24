import {
  faArrowAltCircleDown,
  faHeart,
  faHome,
  faLayerGroup,
  faPlusSquare,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const PlayerSidebar = () => {
  return (
    <div className="sidebar-nav d-flex flex-column justify-content-between">
      <div>
        <Link to=" ">
          <img
            src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
            alt="logo"
            className="spotify-logo mb-4"
          />
        </Link>
        <Link to=" ">
          <button>
            <FontAwesomeIcon icon={faHome} />
            Home
          </button>
        </Link>
        <button>
          <FontAwesomeIcon icon={faSearch} />
          Search
        </button>
        <button>
          <FontAwesomeIcon icon={faLayerGroup} /> Library
        </button>
        <button className="mt-3">
          <FontAwesomeIcon icon={faPlusSquare} />
          Create playlist
        </button>
        <button>
          <FontAwesomeIcon icon={faHeart} />
          Liked songs
        </button>
        <hr />
      </div>
      <div>
        <button>
          <FontAwesomeIcon icon={faArrowAltCircleDown} />
          Download player
        </button>
      </div>
    </div>
  );
};

export default PlayerSidebar;
