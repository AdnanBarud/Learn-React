import { useState, createContext } from 'react'
import './App.css'
import ChildA from './components/ChildA'

function App() {
  
  //1create a Context
  const UserContext=createContext();
  //2.wrap all the components in the provider

  //3. pass the value to the provider
  const [data,setData]=useState("hello from app component")

  return (
    <div>
      <UserContext.Provider>
        <ChildA />
      </UserContext.Provider>
    </div>
  )
}

export default App
