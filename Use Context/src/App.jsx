import { useState, createContext } from 'react'
import './App.css'
import ChildA from './components/ChildA'

  const UserContext=createContext();

function App() {
  
  //1create a Context
  //2.wrap all the components in the provider

  //3. pass the value to the provider
  const [data,setData]=useState("hello from app component")

  return (
    <div>
      <UserContext.Provider value={data}>
        <ChildA />
      </UserContext.Provider>
    </div>
  )
}

export default App
export {UserContext}