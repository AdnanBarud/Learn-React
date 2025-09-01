import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function handelClick(){
    alert("button clicked");
  }
  return (
    <div>
      

    <button onClick={handelClick}>
      click me
    </button>
    </div>
  )
}

export default App
