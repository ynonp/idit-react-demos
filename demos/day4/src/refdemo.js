import React from 'react';
import { useRef, useState } from 'react';

export default function(props) {
  const inputRef = useRef();
  const [text, setText] = useState("");

  function sync() {
    const boxText = inputRef.current.value;
    setText(boxText);
  }

  return (
    <div>
      <input type="text" ref={inputRef} />
      <p>You typed: <span>{text}</span></p>
      <button onClick={sync}>Sync</button>
    </div>
  );
}
