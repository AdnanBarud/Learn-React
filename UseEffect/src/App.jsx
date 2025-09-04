import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [total, setTotal] = useState(1)
  // variontion 1
  // useEffect(() => {
  //  alert(`i will run on every render`)
  // })

  // variontion 2
  // useEffect(() => {
  //  alert(`i will run only once`)
  // }, [])
  
  // variontion 3
  // useEffect(() => {
  //   alert(`i will run when count changes`)
  // }, [count])

  // variotion 4
  useEffect(() => {
    alert(`i will run when count or total changes`)
  }, [count, total])
  

  function handleClick() {
    setCount(count + 1)
  }
   function handleTotal() {
    setTotal(total + 1)
  }

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      //<p>Count is: {count}</p>
       <button onClick={handleTotal}>Click me</button>
      <p>Count is: {total}</p>
    </div>
  )
}

export default App
