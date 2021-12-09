import { GET_TRACKS, SET_TRACKS } from '../utils/music-constants';

const tracksReducer = (state = {}, action) => {
  const { tracks } = action;
  switch (action.type) {
    case GET_TRACKS:
      return {
        ...state,
        next: tracks.next,
        items: [...state.items, ...tracks.items]
      };
    case SET_TRACKS:
      return tracks;
    default:
      return state;
  }
};

export default tracksReducer;