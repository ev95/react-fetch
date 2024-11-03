import { axios_instance, urls } from "../env.js";

//
const GET_ALBUMS = "GET_ALBUMS";

// Initial State
const initState = {
  albums: [],
};

// Reducer
const albumsReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_ALBUMS: {
      return {
        ...state,
        albums: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

// Action creators
export const getAlbumsAC = (data) => ({ type: GET_ALBUMS, payload: data });

// MIDELWIRE CREATORS
export const getAlbumsThunk = () => {
  return (dispatch) => {
    axios_instance
      .get(urls.albums)
      .then((res) => dispatch(getAlbumsAC(res.data)));
  };
};

export default albumsReducer;
