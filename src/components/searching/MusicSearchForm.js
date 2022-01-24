import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import searchMusic from "../../images/searchMusic.svg";

const MusicSearchForm = (props) => {
  const [searchedMusic, setSearchedMusic] = useState("");
  const [errorMessage, setErrorMsg] = useState("");

  const handleInputChange = (event) => {
    const searchedMusic = event.target.value;
    setSearchedMusic(searchedMusic);
  };

  const handleMusicSearch = (event) => {
    event.preventDefault();

    if (searchedMusic.trim() !== "") {
      setErrorMsg("");
      props.handleMusicSearch(searchedMusic);
    } else {
      setErrorMsg("Nie podano żadnej nazwy!");
    }
  };

  return (
    <div>
      <Form onSubmit={handleMusicSearch}>
        {errorMessage && <p className="errorMessage">{errorMessage}</p>}
        <Form.Group controlId="form">
          <Form.Label className="search-label">
            Wprowadź nazwę albumu, wykonawcy, utworu lub listy utworów
          </Form.Label>
          <div className="search-music-img-div">
            {" "}
            <img src={searchMusic} className="search-music-image"></img>
          </div>
          <div className="search-bar">
            <Form.Control
              type="search"
              name="searchedMusic"
              placeholder="Wpisz nazwę..."
              value={searchedMusic}
              onChange={handleInputChange}
            />
            <Button
              variant="info"
              type="submit"
              className="default-button search-button"
            >
              <i class="bi bi-search"></i>
              <span className="search-button-text">Wyszukaj</span>
            </Button>
          </div>
        </Form.Group>
      </Form>
    </div>
  );
};

export default MusicSearchForm;
