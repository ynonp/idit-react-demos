import React from 'react';
import { useState } from 'react';
import _ from 'lodash';

export default function() {
  const [days, setDays] = useState(
     ['Monday', 'Tuesday', 'Wednesday',
      'Thursday', 'Friday', 'Saturday', 'Sunday']);

  function shuffle() {
    setDays(_.shuffle(days));
  }

  return (
    <div>
      <button onClick={shuffle}>Shuffle</button>
      <button>Delete</button>
      <button>Reset</button>
      <ul>        
        {days.map((day) => (
          <li key={day}><input type="checkbox" />{day}</li>
        ))}
      </ul>
    </div>
    )
}
