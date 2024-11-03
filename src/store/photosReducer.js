import { axios_instance, urls } from "../env.js";

//
const GET_PHOTOS = "GET_PHOTOS";

// Initial State
const initState = {
  photos: [],
};

// Reducer
const photosReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_PHOTOS: {
      return {
        ...state,
        photos: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

// Action creators
export const getPhotosAC = (data) => ({ type: GET_PHOTOS, payload: data });

// MIDELWIRE CREATORS
export const getPotosThunk = () => {
  return (dispatch) => {
    axios_instance
      .get(urls.photos)
      .then((res) => dispatch(getPhotosAC(res.data)));
  };
};

export default photosReducer;
