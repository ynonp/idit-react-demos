import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';
import _ from 'lodash';
import $ from 'jquery';

const App = () => {
  const [id, setId] = useState(1);
  const [character, setCharacter] = useState({});
  const [filmId, setFilmId] = useState(1);
  const [film, setFilm] = useState({});

  useEffect(function() {
    setFilm({});
    const req = $.getJSON(`https://swapi.co/api/films/${filmId}/`, function(data) {
      setFilm(data);
    });
    return function cancel() {
      req.abort();
    }

  }, [filmId]);

  useEffect(function() {
    setCharacter({});
    const req = $.getJSON(`https://swapi.co/api/people/${id}/`, function(data) {
      setCharacter(data);
    });
    return function cancel() {
      req.abort();
    }
  }, [id]);

  const characterNameText = (character.name == null ?
    '[Loading please wait]' :
    character.name);

  const filmNameText = (film.title == null ?
    '[Loading please wait]' :
    film.title);

  const filmIds = (character.films != null ?
    character.films.map(f => f.match(/(\d+)\/$/)[1]) :
    _.range(1, 8));

  return (
    <div>
      <h1>ID: {id}</h1>
      Character ID:
      <select onChange={(e) => setId(e.target.value)}>
        {_.range(1, 11).map(id => (
          <option value={id}>{id}</option>
        ))}
      </select>
      Film ID :
      <select onChange={(e) => setFilmId(e.target.value)}>
        {filmIds.map(id => (
          <option value={id}>{id}</option>
        ))}
      </select>
      <hr />
      <h2>Character Name: {characterNameText}</h2>
      <h2>Film Name: {filmNameText}</h2>
    </div>
  )
};


const root = document.querySelector('main');
ReactDOM.render(<App />, root);
