import React from 'react';
import ReactDOM from 'react-dom';
// import { twice, thrice } from './utils';
import utils from './utils';
// now we have utils.twice, utils.thrice
import Person from './person';
import DaysOfTheWeek from './days_of_the_week';
import Counter from './counter';

const App = () => {
    const n = Math.random();

    return (
        <div>
            <h1>Hello World - {n} - { 1 + 1 }</h1>
            <Person name="one"   display={n > 0.5} />
            <Person name="two"   display={n > 0.2} />
            <Person name="three" display={n > 0.9} />
            <Counter />
        </div>
    )
};



const root = document.querySelector('main');
ReactDOM.render(<App />, root);
