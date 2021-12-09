import React from 'react';
import _ from 'lodash';
import { Card } from 'react-bootstrap';
import defaultImage from '../../images/defaultimage.jpg';

const TracksList = ({ tracks }) => {
  return (
    <React.Fragment>
      {Object.keys(tracks).length > 0 && (
        <div className="tracks">
          {tracks.items.map((tracks, index) => {
            return (
              <React.Fragment key={index}>
                <Card style={{ width: '19rem' }}>
                  <a target="_blank" href={tracks.external_urls.spotify} rel="noopener noreferrer" className="cardImage">
                    {!_.isEmpty(tracks.images) ? (<Card.Img variant="top" src={tracks.images[0].url} alt="tracks"/>) :
                    (<img src={defaultImage} alt="tracks" />)}
                  </a>
                  <Card.Body>
                    <Card.Title>{tracks.name}</Card.Title>
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

export default TracksList;