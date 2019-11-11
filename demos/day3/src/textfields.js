import React from 'react';
import { useState } from 'react';

// React Dev Tools

// Visual Studio Code

export default function TextFields(props) {
  const [ val, setVal ] = useState('');

  function change(e) {
    setVal(e.target.value);
  }

  return (
    <div>
      <input type="text" value={val} onChange={change} />
      <input type="text" value={val} onChange={change} />
      <input type="text" value={val} onChange={change} />
      <input type="text" value={val} onChange={change} />
      <input type="text" value={val} onChange={change} />
    </div>
  );
}
