import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const btnRef = useRef(0);

  function handlRef(){
    btnRef.current +=1;
    console.log(btnRef.current);
    
  }
  return (
    <div>
      <button onClick={handlRef}>a</button>

    </div>
  )
}

export default App
