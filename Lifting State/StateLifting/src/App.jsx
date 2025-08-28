
import { useState } from 'react'
import './App.css'
import Card1 from './assets/components/Card1'

function App() {
  
  const [name, setName] = useState("");


  return (
   <div>
      <Card1 name={name} setName={setName} />
   </div>
  )
}

export default App
