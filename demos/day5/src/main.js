import React from 'react';
import ReactDOM from 'react-dom';
import MultiPageForm from './sol';
import UserDetailsPage from './user_details_form';
import SummaryPage from './summary';
import HobbiesPage from './hobbies_page';
import store from './hello_redux';
import Messages from './messages';
import { Provider } from 'react-redux';
import MessageCount from './message_count';

const ChildrenDemo = () => (
  <MultiPageForm>
    <UserDetailsPage />
    <SummaryPage />
    <HobbiesPage />
  </MultiPageForm>
)


const App = () => (
  <Provider store={store}>
    <div>
      <MessageCount />
      <Messages />
    </div>
  </Provider>
);

const root = document.querySelector('main');
ReactDOM.render(<App />, root);
