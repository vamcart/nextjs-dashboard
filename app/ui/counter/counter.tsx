'use client';
import { useState } from 'react';
export default function Counter() {
  // State: a counter value
  const [counter, setCounter] = useState(0)

  // Action: code that causes an update to the state when something happens
  const increment = () => {
    setCounter(prevCounter => prevCounter + 1)
  }

  // View: the UI definition
  return (
    <div>
      Value: {counter} <button className="btn btn-soft btn-primary" onClick={increment}>Increment</button>
    </div>
  )
}