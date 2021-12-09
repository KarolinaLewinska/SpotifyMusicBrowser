import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const MusicSearchForm = (props) => {
  const [searchedMusic, setSearchedMusic] = useState('');
  const [errorMessage, setErrorMsg] = useState('');

  const handleInputChange = (event) => {
    const searchedMusic = event.target.value;
    setSearchedMusic(searchedMusic);
  };

  const handleMusicSearch = (event) => {
    event.preventDefault();

    if (searchedMusic.trim() !== '') {
      setErrorMsg('');
      props.handleMusicSearch(searchedMusic);
    } else {
      setErrorMsg('Wprowadź nazwę albumu, wykonawcy lub listy utworów');
    }
  };

  return (
    <div>
      <Form onSubmit={handleMusicSearch}>
        {errorMessage && <p className="errorMessage">{errorMessage}</p>}
        <Form.Group controlId="form">
          <Form.Label>Wprowadź nazwę albumu, wykonawcy lub listy utworów</Form.Label>
          <Form.Control type="search" name="searchedMusic" value={searchedMusic} onChange={handleInputChange}/>
        </Form.Group>
        <Button variant="info" type="submit">Wyszukaj</Button>
      </Form>
    </div>
  );
};

export default MusicSearchForm;