import { useState,  } from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, reset, incrementByAmount } from './features/count/countSlice';

function App() {
  
  const [amount, setAmount] = useState(0);
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

  function handIncByAmnt() {
    dispatch(incrementByAmount(amount));
  }

  return (
    <div>
      <button onClick={handlIncClick}>+</button>
      <p>Count: {count}</p>
      <button onClick={handDeclClick}>-</button>
      <br /><br />
      <button onClick={handRestClick}>Reset</button>
       <br /><br />
        <input type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))} />
         <br /><br />
        <button onClick={handIncByAmnt}>Add Amount</button>
    </div>
  )
}

export default App
