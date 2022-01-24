import React from "react";
import { Button } from "react-bootstrap";


const Navbar = (props) => {

    const { setLoggedOut, history } = props;

    const logOut = () => {
        localStorage.clear();
        history.push({
          pathname: "/",
        });
        setLoggedOut(true);
      };


return (
    <React.Fragment>
        <nav className="navbar navbar-home">
            <div className="container-fluid">
              <a className="navbar-brand" href="/">
                <span className="navbar-name">
                  <i className="fab fa-spotify logo"></i>Spotify Music Search
                </span>
              </a>
              <Button
                variant="info"
                onClick={logOut}
                className="default-button logout-button"
              >
                Wyloguj się
              </Button>
            </div>
          </nav>
    </React.Fragment>
    );
}

export default Navbar;
