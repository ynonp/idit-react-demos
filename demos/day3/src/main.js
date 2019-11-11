import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';
import _ from 'lodash';
import { useRemoteData } from './utils';
import Timer from './timer';

function getFieldOrLoading(obj, key) {
  if (obj[key] == null) {
    return '[Loading please wait ...]';
  } else {
    return obj[key];
  }
}

function SelectIdBox(props) {
  const { setId, availableIds } = props;

  return (
    <select onChange={(e) => setId(e.target.value)}>
      {availableIds.map(id => (
        <option value={id}>{id}</option>
      ))}
    </select>
  );
}

/*
function App() {
}
*/

const App = () => {
  const [characterId, setCharacterId, character] = useRemoteData('people');
  const [filmId, setFilmId, film] = useRemoteData('films');

  const characterNameText = getFieldOrLoading(character, 'name')
  const filmNameText = getFieldOrLoading(film, 'title');

  const filmIds = (character.films != null ?
    character.films.map(f => f.match(/(\d+)\/$/)[1]) :
    _.range(1, 8));

  return (
    <div>
      <Timer />
      <h1>ID: {characterId}</h1>
      Character ID:
      <SelectIdBox
        availableIds={_.range(1, 11)}
        setId={setCharacterId}
      />

      Film ID :
      <SelectIdBox
        availableIds={filmIds}
        setId={setFilmId}
      />

      <hr />
      <h2>Character Name: {characterNameText}</h2>
      <h2>Film Name: {filmNameText}</h2>
    </div>
  )
};


const root = document.querySelector('main');
ReactDOM.render(<App />, root);
