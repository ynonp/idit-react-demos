import React from 'react';
import ReactDOM from 'react-dom';
import MultiPageForm from './sol';
import UserDetailsPage from './user_details_form';
import SummaryPage from './summary';
import HobbiesPage from './hobbies_page';
import store from './hello_redux';
import Messages from './messages';
import { Provider } from 'react-redux';

const App = () => (
  <Provider store={window.globalStore}>
    <Messages />
  </Provider>
);

const root = document.querySelector('main');
ReactDOM.render(<App />, root);
