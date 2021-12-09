import { GET_PLAYLIST, SET_PLAYLIST } from '../utils/music-constants';

const playlistReducer = (state = {}, action) => {
  const { playlists } = action;
  switch (action.type) {
    case GET_PLAYLIST:
      return {
        ...state,
        next: playlists.next,
        items: [...state.items, ...playlists.items]
      };
    case SET_PLAYLIST:
      return playlists;
    default:
      return state;
  }
};

export default playlistReducer;