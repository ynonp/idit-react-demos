import React from 'react';
import { connect } from 'react-redux';
import { readRemoteData } from './actions';

function Character(props) {
  const { name, height, dispatch } = props;

  function reload() {
    dispatch(readRemoteData(1));
  }

  return (    
    <div>
      <button onClick={reload}>Reload</button>
      <p>Name: {name}</p>
      <p>Height: {height}</p>
    </div>
  );
}

function mapStateToProps(state) {
  const data = state.starwarsCharacter;

  return {
    name: data.name,
    height: data.height,
  }
}

export default connect(mapStateToProps)(Character);
