import React from 'react';
import ReactDOM from 'react-dom';
// import { twice, thrice } from './utils';
import utils from './utils';
// now we have utils.twice, utils.thrice
import Person from './person';
import DaysOfTheWeek from './days_of_the_week';
import Counter from './counter';
import TextFields from './textfields';
import { useState } from 'react';
import DeltaSelector from './delta_selector';

const App = () => {
  const n = Math.random();
  const [delta, setDelta] = useState(1);

  return (
    <div>
      <DaysOfTheWeek />
      <DeltaSelector delta={delta} setDelta={setDelta} />
      <Counter delta={delta} />
    </div>
  )
};



const root = document.querySelector('main');
ReactDOM.render(<App />, root);
