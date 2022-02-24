import {
  faBackward,
  faBars,
  faExpand,
  faForward,
  faHeart,
  faLaptopHouse,
  faPauseCircle,
  faPlayCircle,
  faRandom,
  faRedo,
  faVolumeUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { ProgressBar } from "react-bootstrap";
import { useSelector } from "react-redux";
import { AppState } from "../../store";
import { Track } from "../../types/Track";

const PlayerBar: React.FC = () => {
  const selectedSong: Track = useSelector(
    (state: AppState) => state.player.selectedSong
  );

  let [audio] = useState<HTMLAudioElement>(new Audio(selectedSong?.preview));
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const handlePlayBtn = () => setIsPlaying(!isPlaying);

  useEffect(() => {
    isPlaying ? audio.play() : audio.pause();
  }, [isPlaying]);

  useEffect(() => {
    audio.pause();
    console.log(audio);
    audio = new Audio(selectedSong?.preview);
    audio.play();
  }, [selectedSong]);
  return (
    <div className="playerbar-container">
      <div className="playerbar-song">
        {selectedSong && (
          <>
            <img src={selectedSong.album?.cover_small} alt="" />
            <div className="d-flex flex-column justify-content-center">
              <h6>{selectedSong.title_short}</h6>
              <p className="text-muted" style={{ fontSize: "0.7rem" }}>
                {selectedSong.artist.name}
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
          </>
        )}
      </div>

      <div className="playerbar-controls">
        <div className="playerbar-controls-buttons d-flex">
          <button className="playerbar-additonal-btn">
            <FontAwesomeIcon icon={faRandom} />
          </button>
          <button>
            <FontAwesomeIcon icon={faBackward} />
          </button>

          <button
            style={{ width: "48px", color: "#fff" }}
            onClick={handlePlayBtn}
          >
            {isPlaying ? (
              <FontAwesomeIcon icon={faPauseCircle} size="2x" />
            ) : (
              <FontAwesomeIcon icon={faPlayCircle} size="2x" />
            )}
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
