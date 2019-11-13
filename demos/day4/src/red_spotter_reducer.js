import React from 'react';
import { useState, useEffect, useReducer } from 'react';
import _ from 'lodash';

function Score(props) {
  const { value, dispatch } = props;

  return (
    <>
      <p>Your score is: {value}</p>
    </>
  )
}

function Square(props) {
  const { winner, onClick } = props;
  const style = {
    width: '20px',
    height: '20px',
    display: 'inline-block',
    margin: '10px',
    background: winner ? 'red' : 'grey',
  };

  return (
    <div style={style} onClick={onClick} />
  );
}

function SquareList(props) {
  const { dispatch, state } = props;
  const { redIndex } = state;

  const win  = dispatch.bind(null, { type: 'win' });
  const lose = dispatch.bind(null, { type: 'lose' });

  // Same as:
  /*
  const win = function() {
    dispatch({ type: 'win' });
  };
  */

  return (
    <>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
      {
        _.range(1, 11).map(idx => (
          <Square
            winner={idx === redIndex}
            onClick={idx === redIndex ? win : lose }
          />
        ))
      }
    </>
  )
}

const initialState = {
  redIndex: _.random(1, 10),
  score: 0,
  lastPlayTime: Date.now(),
};

function reducer(state=initialState, action) {  
  switch(action.type) {
    case 'win':
      return {
        redIndex: _.random(1, 10),
        score: state.score + 8,
        lastPlayTime: Date.now(),
      }

    case 'lose':
      return {
        redIndex: state.redIndex,
        score: state.score -5,
        lastPlayTime: Date.now(),
      }

    case 'reset':
      return initialState;
  }
}

export default function RedSpotter(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { score } = state;

  return (
    <div>
      <Score value={score} dispatch={dispatch} />
      <SquareList
        dispatch={dispatch}
        state={state} 
      />
    </div>
  );
}

