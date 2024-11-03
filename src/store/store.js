import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import postReducer from "./postsReducer.js";
import commentsReducer from "./commentsReducer.js";

const rootReducer = combineReducers({
  postsState: postReducer,
  commentsState: commentsReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
