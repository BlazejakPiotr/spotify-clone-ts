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
    default:
      return state;
  }
};

export default playerReducer;
