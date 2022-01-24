import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "../components/pages/Navbar";
import Error from "../images/404Error.svg"

const NotFoundErrorPage = (props) => {
  const { history, setLoggedOut } = props;

  return (
    <React.Fragment>
      <Navbar history={history} setLoggedOut={setLoggedOut}  />
      <div className="error-page">
      <img className="error-image" src={Error}/>
      <p>Nie znaleziono strony. Powróć do <Link to="/dashboard">strony głównej</Link>.</p>
      </div>
    </React.Fragment>
  );
};

export default NotFoundErrorPage;