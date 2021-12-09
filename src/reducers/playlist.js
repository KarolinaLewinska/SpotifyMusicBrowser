import { GET_PLAYLISTS, SET_PLAYLISTS } from '../utils/music-constants';

const playlistReducer = (state = {}, action) => {
  const { playlists } = action;
  switch (action.type) {
    case GET_PLAYLISTS:
      return {
        ...state,
        next: playlists.next,
        items: [...state.items, ...playlists.items]
      };
    case SET_PLAYLISTS:
      return playlists;
    default:
      return state;
  }
};

export default playlistReducer;