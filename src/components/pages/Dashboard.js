import React, { useState } from 'react';
import { getResults, getMoreAlbums, getMoreArtists, getMorePlaylists, getMoreTracks } from '../../actions/music-results';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import MusicSearchResult from '../searching/MusicSearchResult';
import MusicSearchForm from '../searching/MusicSearchForm';
import Header from './Header';
import Loader from './Loader';

const Dashboard = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('albums');
  const { isSessionActive, history } = props;

  const handleMusicSearch = (searchedMusic) => {
    if (isSessionActive()) {
      setIsLoading(true);
      props.dispatch(getResults(searchedMusic)).then(() => {
        setIsLoading(false);
        setSelectedCategory('albums');
      });
    } else {
      history.push({
        pathname: '/',
        state: {
          session_expired: true
        }
      });
    }
  };

  const showMoreResults = async (type) => {
    if (isSessionActive()) {
      const { dispatch, albums, artists, playlist, tracks } = props;
      setIsLoading(true);
      switch (type) {
        case 'albums':
          await dispatch(getMoreAlbums(albums.next));
          break;
        case 'artists':
          await dispatch(getMoreArtists(artists.next));
          break;
        case 'playlist':
          await dispatch(getMorePlaylists(playlist.next));
          break;
        case 'tracks':
          await dispatch(getMoreTracks(tracks.next));
          break;
        default:
      }
      setIsLoading(false);
    } else {
      history.push({
        pathname: '/',
        state: {
          session_expired: true
        }
      });
    }
  };

  const setCategory = (category) => {
    setSelectedCategory(category);
  };

  const { albums, artists, playlist, tracks } = props;
  const result = { albums, artists, playlist, tracks };

  return (
    <React.Fragment>
      {isSessionActive() ? (
        <div>
          <Header />
          <MusicSearchForm handleMusicSearch={handleMusicSearch} />
          <Loader show={isLoading}>Trwa wczytywanie...</Loader>
          <MusicSearchResult result={result} showMoreResults={showMoreResults} setCategory={setCategory} selectedCategory={selectedCategory} isSessionActive={isSessionActive}/>
        </div>
      ) : (
        <Redirect
          to={{
            pathname: '/',
            state: {
              session_expired: true
            }
          }}
        />
      )}
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    albums: state.albums,
    artists: state.artists,
    playlist: state.playlist,
    tracks: state.tracks
  };
};

export default connect(mapStateToProps)(Dashboard);