import React from 'react';
import ReactDOM from 'react-dom';
// import { twice, thrice } from './utils';
import utils from './utils';
// now we have utils.twice, utils.thrice
import Person from './person';

const App1 = () => {
    return <div>
        <h1>Hello World</h1>
        <Person />
    </div>
};

const App = () => (
     <div>
        <h1>Hello World</h1>
        <Person />
    </div>
);



const root = document.querySelector('main');
ReactDOM.render(<App />, root);
