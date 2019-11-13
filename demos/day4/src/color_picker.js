import React from 'react';
import { useState } from 'react';

export default function TimeConverter(props) {
  const [color, setColor] = useState('red');

  return (
    <div>
      <input
      type="color"
      value={color}
      onChange={(e) => setColor(e.target.value)}
     />
     <p
       style={{
         color,
         fontSize: '18px',
       }}       

     >Hello World</p>

    </div>
  )
}


