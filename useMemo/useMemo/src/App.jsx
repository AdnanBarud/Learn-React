import { useState, useMemo } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [input, setInput] = useState('')

  function complexCalculate(num) {
    console.log('Calculating...')
    for(let i=0; i<=1000000000; i++) {}
    return num*2x
  }

  let calculation = useMemo(() => complexCalculate(input)
,[input])

  return (
   <div>
    <h1>Count: {count}</h1>
    <button onClick={() => setCount(count+1)}>increment</button>
    <br /><br />
    <input type="number" value={input} onChange={(e) => setInput(e.target.value)} />
    <br />
    <h2>number: {calculation}</h2>
   </div>
  )
}

export default App
