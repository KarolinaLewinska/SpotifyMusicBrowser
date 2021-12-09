import React from 'react';
import _ from 'lodash';
import { Card } from 'react-bootstrap';
import defaultImage from '../../images/defaultimage.jpg';

const AlbumsList = ({ albums }) => {
  return (
    <React.Fragment>
      {Object.keys(albums).length > 0 && (
        <div className="albums">
          {albums.items.map((album, index) => {
            return (
              <React.Fragment key={index}>
                <Card style={{ width: '19rem' }}>
                  <a target="_blank" href={album.external_urls.spotify} rel="noopener noreferrer" className="cardImage">
                    {!_.isEmpty(album.images) ? (<Card.Img variant="top" src={album.images[0].url} alt="album"/>) :
                    (<img src={defaultImage} alt="defaultImage" />)}
                  </a>
                  <Card.Body>
                    <Card.Title>{album.name}</Card.Title>
                    <Card.Text>
                      <p>{album.artists.map((artist) => artist.name).join(', ')}</p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </React.Fragment>
            );
          })}
        </div>
      )}
    </React.Fragment>
  );
};

export default AlbumsList;