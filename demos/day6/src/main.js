import React from 'react';
import ReactDOM from 'react-dom';
import store from './hello_redux';
import Messages from './messages';
import { Provider } from 'react-redux';
import MessageCount from './message_count';
import NewMessageBox from './new_message_box';
import HocDemo from './higher_order_components';
import Character from './starwars_character';

const App = () => (
  <Provider store={store}>
    <div>
      <NewMessageBox />
      <MessageCount />
      <Messages />
      <Character />
    </div>
  </Provider>
);

const root = document.querySelector('main');
ReactDOM.render(<App />, root);
