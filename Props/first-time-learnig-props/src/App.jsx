import { useState } from 'react'
import './App.css'
import Count from './component/Count.jsx'
import Button from './component/Button.jsx'

function App() {
  const [count, setCount] = useState(0)

  function handelClick() {
    setCount(count + 1)
  }

  return (
    <div>
      <Count>
        <h1>Count: {count}</h1>
        <Button handelClick={handelClick}> Click Me Adnan</Button>
      </Count>
    </div>
  )
}

export default App
