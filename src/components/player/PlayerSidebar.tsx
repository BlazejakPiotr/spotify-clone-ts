import {
  faArrowAltCircleDown,
  faHeart,
  faHome,
  faLayerGroup,
  faPlusSquare,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PlayerSidebar = () => {
  return (
    <div className="sidebar-nav d-flex flex-column justify-content-between">
      <div>
        <img
          src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
          alt="logo"
          className="spotify-logo"
        />
        <button>
          <FontAwesomeIcon icon={faHome} />
          Home
        </button>
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
