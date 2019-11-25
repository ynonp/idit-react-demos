import React from 'react';
import { useState } from 'react';

function UserDetailsPage(props) {
  return (
    <div>
      <label>
        Name
        <input type="text" />
      </label>
      <label>
        Password
        <input type="password" />
      </label>
    </div>
  );
}

function HobbiesPage(props) {
  const allHobbies = ['skiing', 'dancing', 'coding'];
  return (
    <div>
      <ul>
        {
          allHobbies.map(hobby => (
            <li key={hobby}>
              <input type="checkbox" />
              {hobby}
            </li>
          ))
        }
      </ul>
    </div>
  )
}

function SummaryPage(props) {
  return (
    <div>
      <p>You are: USERNAME</p>
      <p>Your hobbies are: HOBBIES</p>
    </div>
  )
}

export default function MultiPageForm(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [hobbies, setHobbies] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  function nextPage() {
    setCurrentPage(page => page < 2 ? (page + 1) : page);
  }

  function previousPage() {
    setCurrentPage(page => page > 0 ? (page - 1) : page);
  }

  let activePage = null;

  switch(currentPage) {
    case 0: activePage = <UserDetailsPage />; break;
    case 1: activePage = <HobbiesPage />; break;
    case 2: activePage = <SummaryPage />; break;
  }

  return (
    <form>
      <p>Page {currentPage + 1} / 3</p>
      <button
        type="button"
        onClick={previousPage}
        disabled={currentPage == 0}
      >
        &lt; Back
      </button>
      <button
        type="button"
        onClick={nextPage}
        disabled={currentPage == 2}
       >Next &gt;</button>

       {activePage}
    </form>
  )
}

