import React from 'react';
import { useState } from 'react';

export default function MultiPageForm(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [hobbies, setHobbies] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);  
  const pageCount = React.Children.count(props.children);

  function nextPage() {
    setCurrentPage(page => page < (pageCount - 1) ? (page + 1) : page);
  }

  function previousPage() {
    setCurrentPage(page => page > 0 ? (page - 1) : page);
  }

  const pages = React.Children.toArray(props.children);
  const childProps = {
    username, setUsername,
    password, setPassword,
    hobbies, setHobbies
  };

  const activePage = React.cloneElement(
    pages[currentPage],
    childProps,
  );
  
  return (
    <form>
      <p>Page {currentPage + 1} / {pageCount}</p>
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
        disabled={currentPage == (pageCount - 1)}
       >Next &gt;</button>

       {activePage}
    </form>
  )
}

