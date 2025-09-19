import { useState, useRef } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const var1 = useRef(0);
  const btnRef = useRef();

  function handlRef(){
    var1.current +=1;
    console.log(var1.current);
    
  }

  function changeColor(){
    btnRef.current.style.backgroundColor = 'red';
  }
  return (
    <div>
      <button ref={btnRef} onClick={handlRef}>a</button>
      <br />
      <button onClick={changeColor}>color change</button>

    </div>
  )
}

export default App
