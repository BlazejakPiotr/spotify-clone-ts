import { AnyAction } from "redux";
import { initialState } from "../store";

const playerReducer = (state = initialState.player, action: AnyAction) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default playerReducer;
