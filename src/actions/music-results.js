import { GET_ALBUMS, GET_ARTISTS, GET_PLAYLISTS, SET_ALBUMS,  SET_ARTISTS, SET_PLAYLISTS, GET_TRACKS, SET_TRACKS } from '../utils/music-constants';
import { get } from '../utils/spotify-api-get';

export const getAlbums = (albums) => ({
  type: GET_ALBUMS,
  albums
});

export const setAlbums = (albums) => ({
  type: SET_ALBUMS,
  albums
});

export const getArtists = (artists) => ({
  type: GET_ARTISTS,
  artists
});

export const setArtists = (artists) => ({
  type: SET_ARTISTS,
  artists
});

export const getPlaylist = (playlists) => ({
  type: GET_PLAYLISTS,
  playlists
});

export const setPlayList = (playlists) => ({
  type: SET_PLAYLISTS,
  playlists
});

export const getTracks = (tracks) => ({
  type: GET_TRACKS,
  tracks
});

export const setTracks = (tracks) => ({
  type: SET_TRACKS,
  tracks
});

export const getResults = (searchedMusic) => {
  return async (dispatch) => {
    try {
      const API_URL = `https://api.spotify.com/v1/search?query=${encodeURIComponent(searchedMusic)}&type=album,playlist,artist,track`;
      const searchingResult = await get(API_URL);
      const { albums, artists, playlists, tracks } = searchingResult;
      dispatch(setArtists(artists));
      dispatch(setAlbums(albums));
      dispatch(setPlayList(playlists));
      return dispatch(setTracks(tracks));
    } catch (err) {
      console.log('Error during retrieving data', err);
    }
  };
};

export const getMoreAlbums = (url) => {
  return async (dispatch) => {
    try {
      const searchingResult = await get(url);
      return dispatch(getAlbums(searchingResult.albums));
    } catch (err) {
      console.log('Error during retrieving data of albums', err);
    }
  };
};

export const getMoreArtists = (url) => {
  return async (dispatch) => {
    try {
      const searchingResult = await get(url);
      return dispatch(getArtists(searchingResult.artists));
    } catch (err) {
      console.log('Error during retrieving data of artists', err);
    }
  };
};

export const getMorePlaylists = (url) => {
  return async (dispatch) => {
    try {
      const searchingResult = await get(url);
      return dispatch(getPlaylist(searchingResult.playlists));
    } catch (err) {
      console.log('Error during retrieving data of playlists', err);
    }
  };
};

export const getMoreTracks = (url) => {
  return async (dispatch) => {
    try {
      const searchingResult = await get(url);
      return dispatch(getTracks(searchingResult.tracks));
    } catch (err) {
      console.log('Error during retrieving data of tracks', err);
    }
  };
};