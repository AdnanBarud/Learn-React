import { useState,  } from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, reset } from './features/count/countSlice';

function App() {
  
  const count = useSelector((state) => state.counter.value);
  const dispatch= useDispatch();

  function handlIncClick() {
    dispatch(increment());
  }
  
  function handDeclClick() {
    dispatch(decrement());
  }

  function handRestClick() {
    console.log("reset clicked");
    dispatch(reset());
  }

  return (
    <div>
      <button onClick={handlIncClick}>+</button>
      <p>Count: {count}</p>
      <button onClick={handDeclClick}>-</button>
      <br /><br />
      <button onClick={handRestClick}>Reset</button>
    </div>
  )
}

export default App
