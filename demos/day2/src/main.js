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

const App = () => {
  const n = Math.random();
  const [delta, setDelta] = useState(4);

  function handleSetDelta(e) {
    setDelta(Number(e.target.value));
  }

  return (
    <div>
      <h1>Hello World - {n} - { 1 + 1 }</h1>
       <Person name="one"   display={n > 0.5} />
       <input type="number" value={delta} onChange={handleSetDelta} />
       <Counter delta={delta} />
       <TextFields />
       <TextFields />
     </div>
  )
};



const root = document.querySelector('main');
ReactDOM.render(<App />, root);
