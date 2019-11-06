import React from 'react';
import { useState } from 'react';

export default function Counter(props) {
  const [count, setCount] = useState(0);
  const color = (count >= 10 ? 'red' : 'black');
  const style = { color: color };
  const cls   = (count >= 10 ? 'red' : 'normal');
  const delta = props.delta || 1;

  function inc() {
    setCount(count + delta);
  }

  return (
    <>
    <p className={cls} style={style}>You clicked {count} times</p>
    <button onClick={inc}>
      Click Me
      </button>
    </>
  )
}
