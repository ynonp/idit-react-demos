import React from 'react';
import { useState } from 'react';

export default function TimeConverter(props) {
  const [seconds, setSeconds] = useState(7200);
  const hours = seconds / 3600;
  const minutes = seconds / 60;

  return (
    <>
      Seconds
      <input
        type="number"
        value={seconds}
        onChange={(e) => setSeconds(Number(e.target.value))} 
      />

      Minutes
      <input
        type="number"
        value={minutes}
        onChange={(e) => setSeconds(Number(e.target.value) * 60) } 
      />

      Hours
      <input
        type="number"
        value={hours}
        onChange={(e) => setSeconds(Number(e.target.value) * 3600) } 
      />
    </>
  )
}

