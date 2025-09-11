import React, { useContext } from 'react'
import { ThemeContext } from '../App';

const ChildC = () => {
  const {theme,setTheme}=useContext(ThemeContext);
  return (
    <div>
      
        <button>Change Theme</button>
    </div>
  )
}

export default ChildC