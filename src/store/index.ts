import { createStore, combineReducers, applyMiddleware, compose } from "redux";

import thunk from "redux-thunk";
import playerReducer from "../reducers/player";

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const initialState = {
  player: {
    data: [],
    error: false,
    loading: false,
  },
};

const bigReducer = combineReducers({
  player: playerReducer,
});

const configureStore = () =>
  createStore(
    bigReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  );

export default configureStore;
