import { Track } from "../../types/Track";
import { useDispatch } from "react-redux";
import { setSelectedSong } from "../../actions";
interface PlayerSongItemProps {
  data: Track;
  index: number;
}

export const PlayerSongItem = ({ data, index }: PlayerSongItemProps) => {
  const dispatch = useDispatch();
  let duration = parseInt(data.duration);
  let minutes = Math.floor(duration / 60);
  let seconds = duration % 60;

  function padTo2Digits(num: number) {
    return num.toString().padStart(2, "0");
  }

  return (
    <div className="song-item" onClick={() => dispatch(setSelectedSong(data))}>
      <div>{index + 1}</div>
      <div>
        <img src={data.album?.cover_small} alt={data.title_short} />
      </div>
      <div className="w-75">
        <h6>{data.title_short}</h6>
        {/* <p>{data.contributors!.map(artist => )}</p> */}
      </div>
      <div>{`${padTo2Digits(minutes)}:${padTo2Digits(seconds)}`}</div>
    </div>
  );
};
export default PlayerSongItem;
