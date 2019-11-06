import React from 'react';

export default function DeltaSelector(props) {
  const { delta, setDelta } = props;

  function doChange(e) {
    setDelta(Number(e.target.value));
  }

  return (
    <input type="number" value={delta} onChange={doChange} />
  );
}

