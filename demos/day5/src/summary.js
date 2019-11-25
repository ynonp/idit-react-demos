import React from 'react';

export default function SummaryPage(props) {
  const { username, hobbies } = props;
  return (
    <div>
      <p>You are: {username}</p>
      <p>Your hobbies are: {hobbies.join(', ')}</p>
    </div>
  )
}


