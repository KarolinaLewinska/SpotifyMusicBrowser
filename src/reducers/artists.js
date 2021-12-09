import { GET_ARTISTS, SET_ARTISTS } from '../utils/music-constants';

const artistsReducer = (state = {}, action) => {
  const { artists } = action;
  switch (action.type) {
    case GET_ARTISTS:
      return {
        ...state,
        next: artists.next,
        items: [...state.items, ...artists.items]
      };
    case SET_ARTISTS:
      return artists;
    default:
      return state;
  }
};

export default artistsReducer;