import React from 'react';

export default function(props) {
    // destructuring
    const { name, display } = props;
    if (!display) { return false; }

    return (
        <>
            <h2>Hello! {name}</h2>
        </>
    )
}