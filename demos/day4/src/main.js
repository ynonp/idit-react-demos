import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import RedSpotter from './red_spotter_reducer.js';
import TimeConverter from './time_converter';
import ColorPicker from './color_picker';
import NumberGuesser from './number_guess';
import MemoDemo from './memo';
import RefDemo from './refdemo';
import ClassesDemo from './esclasses';

const App = () => (
  <ClassesDemo />
);

const root = document.querySelector('main');
ReactDOM.render(<App />, root);
