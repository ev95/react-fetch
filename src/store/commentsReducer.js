import { axios_instance, urls } from "../env.js";

const GET_COMMENTS = "GET_COMMENTS";

// Initial State
const initState = {
  comments: [],
};

// Reducer
const commentsReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_COMMENTS: {
      return {
        ...state,
        comments: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

// Action creators
export const getCommentsAC = (data) => ({ type: GET_COMMENTS, payload: data });

// MIDELWIRE CREATORS
export const getCommentsThunk = () => {
  return (dispatch) => {
    axios_instance
      .get(urls.comments)
      .then((res) => dispatch(getCommentsAC(res.data)));
  };
};

export default commentsReducer;
