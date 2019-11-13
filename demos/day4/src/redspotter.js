import React from 'react';
import { useState, useEffect } from 'react';
import _ from 'lodash';

function Score(props) {
  const { value } = props;

  return (
    <p>Your score is: {value}</p>
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

export default function RedSpotter(props) {
  const [redIndex, setRedIndex] = useState(_.random(1, 10));
  const [score, setScore] = useState(0);
  const [lastPlayTime, setLastPlayTime] = useState(Date.now());

  useEffect(
    function() {
      const timer = setTimeout(function() {
        setScore(score => score - 2);
        setLastPlayTime(Date.now());
      }, 2000)

      return function cancel() {
        clearTimeout(timer);
      }
    }, [lastPlayTime])

  
  function win() {
    setScore(score => score + 8);
    setRedIndex(_.random(1, 10));
    setLastPlayTime(Date.now());
  }

  function lose() {
    setScore(score => score - 5);
    setLastPlayTime(Date.now());
  }

  function timeout() {
    setScore(score => score - 2);
    startNewTimer();
  }

  return (
    <div>
      <Score value={score} />
      {
        _.range(1, 11).map(idx => (
          <Square
            winner={idx === redIndex}
            onClick={idx === redIndex ? win : lose }
          />
        ))
      }
    </div>
  );
}
