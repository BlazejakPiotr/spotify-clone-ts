import { Dispatch } from "redux";

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
