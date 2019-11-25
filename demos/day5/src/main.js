import React from 'react';
import ReactDOM from 'react-dom';
import MultiPageForm from './sol';
import UserDetailsPage from './user_details_form';
import SummaryPage from './summary';
import HobbiesPage from './hobbies_page';

const App = () => (
  <MultiPageForm foo="bar">
    <SummaryPage />
    <UserDetailsPage />
    <HobbiesPage />
  </MultiPageForm>
);

const root = document.querySelector('main');
ReactDOM.render(<App />, root);
