import { createContext, useState } from 'react'
import './App.css'
import ChildA from './components/ChildA';

 const ThemeContext=createContext();


function App() {

  const [theme,setTheme]=useState("light");

  return (
   <div>
    <ThemeContext.Provider value={{theme,setTheme}}>
      <ChildA />
    </ThemeContext.Provider>   </div>
  )
}

export default App
