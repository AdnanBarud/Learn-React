import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
   alert(`You clicked ${count} times`)
  },[])
  
  function handleClick() {
    setCount(count + 1)
  }

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      <p>Count is: {count}</p>
    </div>
  )
}

export default App
