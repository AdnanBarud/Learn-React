import { useState,  } from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'

function App() {
  
  const count = useSelector((state) => state.counter.value);
  const dispatch= useDispatch();

  function handlClick() {
    
  }

  return (
    <div>
      <button onClick={handlClick}>+</button>
      <p>Count: {count}</p>
      <button onClick={handlClick}>-</button>
    </div>
  )
}

export default App
