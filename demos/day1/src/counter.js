import React from 'react';
import { useState } from 'react';

export default function(props) {
    const [count, setCount] = useState(0);

    function inc() {
        setCount(count + 1);
    }

    return (
        <>
            <p>You clicked {count} times</p>
            <button onClick={inc}>
                Click Me
            </button>
        </>
    )
}