import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import RedSpotter from './redspotter';
import TimeConverter from './time_converter';
import ColorPicker from './color_picker';
import NumberGuesser from './number_guess';

const App = () => (
  <NumberGuesser />
);


const root = document.querySelector('main');
ReactDOM.render(<App />, root);
