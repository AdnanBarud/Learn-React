import React, { useContext } from 'react'
import { ThemeContext } from '../App';

const ChildC = () => {
  const {theme,setTheme}=useContext(ThemeContext);

  function handleThemeChange(){
    if(theme==="light"){
        setTheme("dark");
    } else{
        setTheme("light");
    }
  }

  return (
    <div>
      
        <button onClick={handleThemeChange}>Change Theme</button>
    </div>
  )
}

export default ChildC