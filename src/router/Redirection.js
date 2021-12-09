import React from 'react';
import _ from 'lodash';
import { getParamValues } from '../utils/auth';

export default class Redirection extends React.Component {
  componentDidMount() {
    const { setExpirationTime, history, location } = this.props;
    try {
      if (_.isEmpty(location.hash)) {
        return history.push('/dashboard');
      }

      const access_token = getParamValues(location.hash);
      const expirationTime = new Date().getTime() + access_token.expires_in * 3000;
      localStorage.setItem('params', JSON.stringify(access_token));
      localStorage.setItem('expiry_time', expirationTime);
      setExpirationTime(expirationTime);
      history.push('/dashboard');
    } catch (err) {
      history.push('/');
    }
  }

  render() {
    return null;
  }
}