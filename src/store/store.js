import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";

import commentsReducer from "./commentsReducer.js";
import photosReducer from "./photosReducer.js";
import albumsReducer from "./albumsReducer.js";
import postReducer from "./postsReducer.js";

const rootReducer = combineReducers({
  postsState: postReducer,
  commentsState: commentsReducer,
  photosState: photosReducer,
  albumsState: albumsReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
