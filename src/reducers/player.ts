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
    default:
      return state;
  }
};

export default playerReducer;
