import React from "react";
import ReactDOM from "react-dom";
import { useState, useMemo, useCallback } from "react";

const Header = React.memo(function Header(props) {
  console.count("Header.render");

  return <h1>My Counter Demo</h1>;
});

function DisplayValue(props) {
  console.count("DisplayValue.render");
  const { val } = props;
  return <p>Value: {val}</p>;
}

function canSkipUpdateDisplayMod5(oldProps, newProps) {
  const oldValue = oldProps.val;
  const newValue = newProps.val;  

  return (
    (oldValue % 5 === 0)
    ===
    (newValue % 5 === 0)
  )
}



const DisplayMod5 = React.memo(function DisplayMod5(props) {
  console.count("DisplayMod5.render");

  const { val } = props;
  const text =
    val % 5 === 0 ? "Value is divisible by 5" : "Value does not divide by 5";

  return <p>{text}</p>;
}, canSkipUpdateDisplayMod5);

const MyButton = React.memo(function MyButton(props) {
  console.count("MyButton.render");
  return <button onClick={props.onClick}>Click Me</button>;
});

export default function Counter() {
  console.count("Counter.render");

  const [count, setCount] = useState(0);
  const [delta, setDelta] = useState(1);

  const inc = useCallback(function inc() {
    setCount(val => val + delta);
  }, [delta]);

  return (
    <>
      <Header />
      <label>
        Increase by:
        <input
          type="number"
          value={delta}
          onChange={e => setDelta(Number(e.target.value))}
        />
      </label>
      <DisplayValue val={count} />
      <DisplayMod5 val={count} />
      <MyButton onClick={inc} />
    </>
  );
}


