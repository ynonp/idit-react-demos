import React from 'react';
import { useState, useEffect } from 'react';

export default function Timer(props) {
  const [ticks, setTicks] = useState(0);

  useEffect(function() {
    // This code will run ONLY once
    const timer = setInterval(function() {
      setTicks(ticks + 1);
    }, 1000);

    return function abort() {
      clearInterval(timer);
    }
  }, []);

  return (
    <div>
      Countup: {ticks}
    </div>
  );
}
