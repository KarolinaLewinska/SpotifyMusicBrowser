import React from 'react';
import { Alert } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import Header from './Header';

const Home = (props) => {
  const { REACT_APP_CLIENT_ID, REACT_APP_AUTHORIZE_URL, REACT_APP_REDIRECT_URL } = process.env;

  const handleLogin = () => {
    window.location = `${REACT_APP_AUTHORIZE_URL}?client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${REACT_APP_REDIRECT_URL}&response_type=token&show_dialog=true`;
  };

  const { isSessionActive, location } = props;
  const { state } = location;
  const sessionExpired = state && state.session_expired;

  return (
    <React.Fragment>
      {isSessionActive() ? (<Redirect to="/dashboard" />) : (
        <div className="login">
          <Header />
          {sessionExpired && (<Alert variant="info">Twoja sesja wygasła. Zaloguj się ponownie</Alert>)}
          <Button variant="info" type="submit" onClick={handleLogin}>Zaloguj się</Button>
        </div>
      )}
    </React.Fragment>
  );
};

export default connect()(Home);