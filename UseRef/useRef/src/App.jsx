import { useState, useRef } from 'react'
import './App.css'

function App() {
  const [time, setTime] = useState(0)
  const timerRef = useRef();

  // const var1 = useRef(0);
  // const btnRef = useRef();
  // function handlRef(){
  //   var1.current +=1;
  //   console.log(var1.current);
  // }
  // function changeColor(){
  //   btnRef.current.style.backgroundColor = 'red';
  // }
  function handleStart(){
   timerRef.current= setInterval(() => {
      setTime(time => time + 1)
    }, 1000);
  }
  function handelStop(){
    clearInterval(timerRef.current);
    timerRef.current = null;
  }
  function handelReset(){
    handelStop();
    setTime(0);
  }
  
  return (
    <div>
      <h1>Time in Seconts {time}</h1>
      <button onClick={handleStart}> Start</button>
      <br></br>
      <button onClick={handelStop}> Stop</button>
      <br></br>
      <button onClick={handelReset}> Reset</button>
      {/* <button ref={btnRef} onClick={handlRef}>a</button>
      <br />
      <button onClick={changeColor}>color change</button> */}

    </div>
  )
}

export default App
