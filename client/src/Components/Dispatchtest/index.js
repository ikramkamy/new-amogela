import React from 'react';
function Counter({ count, dispatch }) {
    return (
      <div>
        <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
        <span>{count}</span>
        <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
        <button onClick={() => dispatch({ type: 'RESET' })}>reset</button>
      </div>
    )
  }
  export default Counter;