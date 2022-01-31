import { Dispatch } from "redux";
import { Track } from "../types/Track";

const apiKey: string = process.env.REACT_APP_apiKey as string;
const apiHost: string = process.env.REACT_APP_apiHost as string;

export const getTopRadioPlaylists = () => {
  return async (dispatch: Dispatch) => {
    try {
      let response = await fetch(
        "https://deezerdevs-deezer.p.rapidapi.com/radio/top",
        {
          method: "GET",
          headers: { "x-rapidapi-host": apiHost, "x-rapidapi-key": apiKey },
        }
      );
      if (response.ok) {
        const radios = await response.json();
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
        `https://deezerdevs-deezer.p.rapidapi.com/artist/${artistID}`,
        {
          method: "GET",
          headers: { "x-rapidapi-host": apiHost, "x-rapidapi-key": apiKey },
        }
      );
      if (response.ok) {
        const artist = await response.json();
        dispatch({
          type: "GET_ARTIST",
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
        `https://deezerdevs-deezer.p.rapidapi.com/artist/${artistID}/related`,
        {
          method: "GET",
          headers: { "x-rapidapi-host": apiHost, "x-rapidapi-key": apiKey },
        }
      );
      if (response.ok) {
        const relatedArtists = await response.json();
        dispatch({
          type: "GET_RELATED_ARTISTS",
          payload: relatedArtists,
        });
      } else {
        console.log("Something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getTracklist = (artistID: string) => {
  return async (dispatch: Dispatch) => {
    try {
      let response = await fetch(
        `https://deezerdevs-deezer.p.rapidapi.com/artist/${artistID}/top?limit=50`,
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
