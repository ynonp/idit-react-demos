import React from 'react';
import { useState, useEffect } from 'react';
import _ from 'lodash';

function calcMessage(secretNumber, guess) {
  if (secretNumber === guess) {
    return "Bravo! You win";
  } else if (secretNumber > guess) {
    return "Sorry, too low";
  } else if (secretNumber < guess) {
    return "Sorry, too high";
  }
}

export default function NumberGuesser(props) {
  const [secretNumber, setSecretNumber] = useState(_.random(1, 100));
  const [guess, setGuess] = useState(0);

  useEffect(function() {
    setTimeout(function() {
      setSecretNumber(_.random(1, 100));
    }, 5000);
  }, [guess === secretNumber]);

  function handleGuessChange(e) {
    setGuess(Number(e.target.value));
  }

  return (
    <div>
      <p>You selected the number: {guess}</p>
      <p>That number is: {calcMessage(secretNumber, guess)}</p>
      <p>You can try again:
        <input
          type="number"
          value={guess}
          onChange={handleGuessChange}
        />
      </p>
    </div>
  );
}



