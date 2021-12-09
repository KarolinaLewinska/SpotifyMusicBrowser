import React from 'react';
import _ from 'lodash';
import { Card } from 'react-bootstrap';
import defaultImage from '../../images/defaultimage.jpg';

const ArtistsList = ({ artists }) => {
  return (
    <React.Fragment>
      {Object.keys(artists).length > 0 && (
        <div className="artists">
          {artists.items.map((artist, index) => {
            return (
              <React.Fragment key={index}>
                <Card style={{ width: '19rem' }}>
                  <a target="_blank" href={artist.external_urls.spotify} rel="noopener noreferrer" className="cardImage">
                    {!_.isEmpty(artist.images) ? (<Card.Img variant="top" src={artist.images[0].url} alt="artist"/>) :
                    (<img src={defaultImage} alt="artists" />)}
                  </a>
                  <Card.Body>
                    <Card.Title>{artist.name}</Card.Title>
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

export default ArtistsList;