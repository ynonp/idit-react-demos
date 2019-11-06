import React from 'react';
import { useState } from 'react';
import _ from 'lodash';

const days_of_the_week = [
  'Monday', 'Tuesday', 'Wednesday',
  'Thursday', 'Friday', 'Saturday', 'Sunday',
];

export default function() {
  const [days, setDays] = useState(days_of_the_week);
  const [selectedDays, setSelectedDays] = useState(new Set([]));  

  function reset() {
    setDays(days_of_the_week);
    setSelectedDays(new Set([]));
  }

  function shuffle() {
    setDays(_.shuffle(days));
  }

  function handleDelete() {
    setDays(days.filter((day) => !selectedDays.has(day)));
  }

  function handleChange(e, day) {
    const newSelectedDays = new Set([...selectedDays]);
    if (e.target.checked) {      
      newSelectedDays.add(day);
    } else {
      newSelectedDays.delete(day);
    }
    setSelectedDays(newSelectedDays);
  }

  // npx webpack-dev-server -d
  return (
    <div>
      <button onClick={shuffle}>Shuffle</button>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={reset}>Reset</button>
      <ul>        
        {days.map((day) => (
          <li key={day}>
            <input
              type="checkbox"
              checked={selectedDays.has(day)}
              onChange={(e) => handleChange(e, day)}
          />{day}</li>
        ))}
      </ul>
    </div>
    )
}
