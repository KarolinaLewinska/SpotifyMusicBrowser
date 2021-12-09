import React from 'react';
import _ from 'lodash';
import { Redirect } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import AlbumsList from '../lists/AlbumsList';
import ArtistsList from '../lists/ArtistsList';
import PlayList from '../lists/PlayList';

const MusicSearchResult = (props) => {
  const { isSessionActive, showMoreResults, result, setCategory, selectedCategory } = props;
  const { albums, artists, playlist } = result;

  if (!isSessionActive()) {
    return (
      <Redirect
        to={{
          pathname: '/',
          state: {
            session_expired: true
          }
        }}
      />
    );
  }

  return (
    <React.Fragment>
      <div className="searchButtons">
        {!_.isEmpty(albums.items) && (
          <button className={`${ selectedCategory === 'albums' ? 'btn active' : 'btn' }`} onClick={() => setCategory('albums')}>
            Albumy
          </button>
        )}
        {!_.isEmpty(artists.items) && (
          <button className={`${ selectedCategory === 'artists' ? 'btn active' : 'btn' }`} onClick={() => setCategory('artists')}>
            Artyści
          </button>
        )}
        {!_.isEmpty(playlist.items) && (
          <button className={`${ selectedCategory === 'playlist' ? 'btn active' : 'btn' }`} onClick={() => setCategory('playlist')}>
            Listy utworów
          </button>
        )}
      </div>
      <div className={`${selectedCategory === 'albums' ? '' : 'hideElement'}`}>
        {albums && <AlbumsList albums={albums} />}
      </div>
      <div className={`${selectedCategory === 'artists' ? '' : 'hideElement'}`}>
        {artists && <ArtistsList artists={artists} />}
      </div>
      <div className={`${selectedCategory === 'playlist' ? '' : 'hideElement'}`}>
        {playlist && <PlayList playlist={playlist} />}
      </div>
      {!_.isEmpty(result[selectedCategory]) && !_.isEmpty(result[selectedCategory].next) && (
          <div className="moreResults" onClick={() => showMoreResults(selectedCategory)}>
            <Button variant="info" type="button"> Więcej wyników</Button>
          </div>
        )}
    </React.Fragment>
  );
};

export default MusicSearchResult;