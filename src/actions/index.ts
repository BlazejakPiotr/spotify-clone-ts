import { Dispatch } from "redux";
import { Album } from "../types/Album";
import { Artist } from "../types/Artist";
import { Radio } from "../types/Radio";
import { Track } from "../types/Track";

const proxyGate: string = process.env.REACT_APP_proxyGate as string;
const apiKey: string = process.env.REACT_APP_apiKey as string;
const apiHost: string = process.env.REACT_APP_apiHost as string;

export const getTopRadioPlaylists = () => {
  return async (dispatch: Dispatch) => {
    try {
      let response = await fetch(
        `${proxyGate}https://api.deezer.com/radio/top`,
        {
          method: "GET",
          headers: { "x-rapidapi-host": apiHost, "x-rapidapi-key": apiKey },
        }
      );
      if (response.ok) {
        const radios: Radio[] = await response.json();
        dispatch({
          type: "GET_RADIOS",
          payload: radios,
        });
      } else {
        console.log("Something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getArtist = (artistID: string) => {
  return async (dispatch: Dispatch) => {
    try {
      let response = await fetch(
        `${proxyGate}https://api.deezer.com/artist/${artistID}`,
        {
          method: "GET",
          headers: { "x-rapidapi-host": apiHost, "x-rapidapi-key": apiKey },
        }
      );
      if (response.ok) {
        const artist: Artist = await response.json();
        dispatch({
          type: "GET_ARTIST",
          payload: artist,
        });
        dispatch({
          type: "SET_RECENTLY_VIEWED",
          payload: artist,
        });
      } else {
        console.log("Something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getRelatedToArtist = (artistID: string) => {
  return async (dispatch: Dispatch) => {
    try {
      let response = await fetch(
        `${proxyGate}https://api.deezer.com/artist/${artistID}/related`,
        {
          method: "GET",
        }
      );

      const relatedArtists: Artist[] = await response.json();

      dispatch({
        type: "GET_RELATED_ARTISTS",
        payload: relatedArtists,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getTracklist = (artistID: string) => {
  return async (dispatch: Dispatch) => {
    try {
      let response = await fetch(
        `${proxyGate}https://api.deezer.com/artist/${artistID}/top?limit=50`,
        {
          method: "GET",
          headers: { "x-rapidapi-host": apiHost, "x-rapidapi-key": apiKey },
        }
      );
      if (response.ok) {
        const tracklist: Track[] = await response.json();
        dispatch({
          type: "GET_TRACKLIST",
          payload: tracklist,
        });
      } else {
        console.log("Something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getAlbumList = (artistID: string) => {
  return async (dispatch: Dispatch) => {
    try {
      let response = await fetch(
        `${proxyGate}https://api.deezer.com/artist/${artistID}/albums`,
        {
          method: "GET",
          headers: { "x-rapidapi-host": apiHost, "x-rapidapi-key": apiKey },
        }
      );
      if (response.ok) {
        const albums: Album[] = await response.json();
        dispatch({
          type: "GET_ALBUMS",
          payload: albums,
        });
      } else {
        console.log("Something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const setSelectedSong = (song: Track) => ({
  type: "SET_SELECTED_SONG",
  payload: song,
});
