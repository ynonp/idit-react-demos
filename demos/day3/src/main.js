import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';
import _ from 'lodash';
import $ from 'jquery';

const App = () => {
  const [id, setId] = useState(_.random(1, 10));
  const [name, setName] = useState("Loading, please wait...");

  useEffect(function() {
    const req = $.getJSON(`https://swapi.co/api/people/${id}/`, function(data) {
      setName(data.name);
    });
    return function cancel() {
      req.abort();
    }
  }, [id]);

  function shuffle() {
    setId(_.random(1, 10));
    setName('[Loading, please wait...]');
  }

  return (
    <div>
      <h1>ID: {id}</h1>
      Character ID:
      <select>
        <option>1</option>
        <option>1</option>
        <option>1</option>
        <option>1</option>
        <option>1</option>
        <option>1</option>
        <option>1</option>
      </select>
      Film ID:
      <select>
        <option>1</option>
        <option>1</option>
        <option>1</option>
        <option>1</option>
        <option>1</option>
        <option>1</option>
        <option>1</option>
      </select>
      <h1>Name: {name}</h1>
      <button onClick={shuffle}>Shuffle</button>
    </div>
  )
};


const root = document.querySelector('main');
ReactDOM.render(<App />, root);
