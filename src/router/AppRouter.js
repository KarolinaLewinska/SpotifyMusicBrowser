import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../components/pages/Home';
import Dashboard from '../components/pages/Dashboard';
import NotFoundErrorPage from '../errorpages/NotFoundErrorPage';
import Redirection from './Redirection';

class AppRouter extends React.Component {
  state = {
    expirationTime: '0',
    loggedOut: false
  };

  componentDidMount() {
    let expirationTime;
    try {
      expirationTime = JSON.parse(localStorage.getItem('expiry_time'));
    } catch (err) {
      expirationTime = '0';
    }
    this.setState({ expirationTime });
  }

  setExpirationTime = (expirationTime) => {
    this.setState({ expirationTime });
  };
  
  setLoggedOut = (isLoggedOut) => {
    this.setState({ loggedOut: isLoggedOut })
  }

  isSessionActive = () => {
    const currentTime = new Date().getTime();
    const expirationTime = this.state.expirationTime;
    const loggedOut = this.state.loggedOut;
    const isSessionValid = currentTime < expirationTime;

    return isSessionValid && !loggedOut;
  };

  render() {
    return (
      <BrowserRouter>
        <div className="main">
          <Switch>
            <Route
              path="/"
              exact={true}
              render={(props) => (
                <Home 
                isSessionActive={this.isSessionActive} {...props} />
              )}
            />
            <Route
              path="/change"
              render={(props) => (
                <Redirection
                  isSessionActive={this.isSessionActive}
                  setExpirationTime={this.setExpirationTime}
                  {...props}
                />
              )}
            />
            <Route
              path="/dashboard"
              render={(props) => (
                <Dashboard 
                isSessionActive={this.isSessionActive}
                setLoggedOut={this.setLoggedOut} 
                {...props} />
              )}
            />
            <Route component={NotFoundErrorPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default AppRouter;