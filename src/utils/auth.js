import axios from 'axios';

export const getParamValues = (url) => {
  return url.slice(1).split('&')
    .reduce((previous, current) => {
      const [title, value] = current.split('=');
      previous[title] = value;
      return previous;
    }, {});
};

export const setAuthHeader = () => {
  try {
    const params = JSON.parse(localStorage.getItem('params'));
    if (params) {
      axios.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${params.access_token}`;
    }
  } catch (err) {
    console.log('Error during authorization', err);
  }
};