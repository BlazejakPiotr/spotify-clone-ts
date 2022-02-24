import { AnyAction } from "redux";
import { initialState } from "../store";

const playerReducer = (state = initialState.player, action: AnyAction) => {
  switch (action.type) {
    case "GET_RADIOS":
      return {
        ...state,
        data: {
          ...state.data,
          radios: action.payload,
        },
      };
    case "GET_ARTIST":
      return {
        ...state,
        data: {
          ...state.data,
          artist: action.payload,
        },
      };
    case "GET_RELATED_ARTISTS":
      return {
        ...state,
        data: {
          ...state.data,
          related: action.payload,
        },
      };
    case "GET_TRACKLIST":
      return {
        ...state,
        data: {
          ...state.data,
          tracklist: action.payload,
        },
      };
    case "GET_ALBUMS":
      return {
        ...state,
        data: {
          ...state.data,
          albums: action.payload,
        },
      };
    case "SET_RECENTLY_VIEWED":
      return {
        ...state,
        data: {
          ...state.data,
          recent: [action.payload],
        },
      };
    case "SET_SELECTED_SONG":
      return {
        ...state,
        selectedSong: action.payload,
      };
    default:
      return state;
  }
};

export default playerReducer;
