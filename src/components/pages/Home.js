import React from "react";
import { Alert } from "react-bootstrap";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import Header from "./Header";
import homeImage from "../../images/homeImage.svg";

const Home = (props) => {
  const {
    REACT_APP_CLIENT_ID,
    REACT_APP_AUTHORIZE_URL,
    REACT_APP_REDIRECT_URL,
  } = process.env;

  const handleLogin = () => {
    window.location = `${REACT_APP_AUTHORIZE_URL}?client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${REACT_APP_REDIRECT_URL}&response_type=token&show_dialog=true`;
  };

  const { isSessionActive, location } = props;
  const { state } = location;
  const sessionExpired = state && state.session_expired;

  return (
    <React.Fragment>
      {isSessionActive() ? (
        <Redirect to="/dashboard" />
      ) : (
        <div className=" landing-page-header gradient">
          <div className="wrapper-div">
            <div className="home-image-div">
              <img className="home-image" alt="homeImage" src={homeImage} />
            </div>
            <div className="header-div">
              <Header />
              {sessionExpired && (
                <Alert variant="info">
                  Twoja sesja wygasła. Zaloguj się ponownie
                </Alert>
              )}
              <div className="header-description-div">
                <span className="header-description">
                  Jesteś fanem muzyki? Bądź na bieżąco ze swoimi ulubionymi
                  przebojami! Zaloguj się i wyszukaj dowolnych artystów, albumy,
                  playlisty oraz piosenki.{" "}
                </span>
              </div>
              <div className="div-button-login">
                {" "}
                <Button
                  type="submit"
                  className="button-login"
                  onClick={handleLogin}
                >
                  <span>Zaloguj się</span>
                </Button>
              </div>
            </div>
          </div>
          <div className="waves-svg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1400 300"
              preserveAspectRatio="none"
            >
              <path
                fill="#EBEBEB"
                fill-opacity="1"
                d="M0,128L48,144C96,160,192,192,288,186.7C384,181,480,139,576,117.3C672,96,768,96,864,106.7C960,117,1056,139,1152,138.7C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default connect()(Home);
