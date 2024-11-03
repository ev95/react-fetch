import { axios_instance, urls } from "../env.js";

//
const GET_POSTS = "GET_POSTS";

// Initial State
const initState = {
  posts: [],
};

// Reducer
const postReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_POSTS: {
      return {
        ...state,
        posts: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

// Action creators
export const getPostsAC = (data) => ({ type: GET_POSTS, payload: data });

// MIDELWIRE CREATORS
export const getPostsThunk = () => {
  return (dispatch) => {
    axios_instance
      .get(urls.posts)
      .then((res) => dispatch(getPostsAC(res.data)));
  };
};

export default postReducer;
