import React from 'react';
import _ from 'lodash';
import { Card } from 'react-bootstrap';
import defaultImage from '../../images/defaultimage.jpg';

const PlayList = ({ playlist }) => {
  return (
    <div>
      {Object.keys(playlist).length > 0 && (
        <div className="playlist">
          {playlist.items.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <Card style={{ width: '19rem' }}>
                  <a target="_blank" href={item.external_urls.spotify} rel="noopener noreferrer" className="cardImage">
                    {!_.isEmpty(item.images) ? (<Card.Img variant="top" src={item.images[0].url} alt="playlist" />) :
                    (<img src={defaultImage} alt="defaultImage" />)}
                  </a>
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>
                      <p>{item.owner.display_name}</p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </React.Fragment>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default PlayList;