import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/pages/Header';

const NotFoundErrorPage = () => {
  return (
    <React.Fragment>
      <Header />
      <p>Nie znaleziono strony. Powróć do strony głównej.</p>
      <Link to="/dashboard">Strona główna</Link>
    </React.Fragment>
  );
};

export default NotFoundErrorPage;