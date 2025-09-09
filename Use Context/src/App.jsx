import { useState } from 'react'
import './App.css'
import ChildA from './components/ChildA'

function App() {
  
  //1create a Context
  const Context=createContext();
  //2.wrap all the components in the provider

  return (
    <div>
      
      <ChildA />

    </div>
  )
}

export default App
