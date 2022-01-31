import { Track } from "../../types/Track";

interface PlayerSongItemProps {
  data: Track;
  index: number;
}

export const PlayerSongItem = ({ data, index }: PlayerSongItemProps) => {
  return (
    <div className="song-item">
      <div>{index + 1}</div>
      <div>
        <img src={data.album?.cover_small} alt={data.title_short} />
      </div>
      <div className="w-75">
        <h6>{data.title_short}</h6>
        {/* <p>{data.contributors!.map(artist => )}</p> */}
      </div>
      <div>2:21</div>
    </div>
  );
};
export default PlayerSongItem;
