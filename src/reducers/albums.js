import { GET_ALBUMS, SET_ALBUMS } from '../utils/music-constants';

const albumsReducer = (state = {}, action) => {
  const { albums } = action;
  switch (action.type) {
    case GET_ALBUMS:
      return {
        ...state,
        next: albums.next,
        items: [...state.items, ...albums.items]
      };
    case SET_ALBUMS:
      return albums;
    default:
      return state;
  }
};

export default albumsReducer;