import React from 'react'

import "./CounterStyle.css";

function Counter( { total, completed } ) {
    return (
        <h2 className='subtitle'>You have reviewed {completed} of {total} items</h2>
    );
};

export { Counter};