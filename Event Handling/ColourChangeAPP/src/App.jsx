import { useState } from 'react'

import './App.css'
import Colour from './components/Colour';

function App() {
  
  const [click, setClick] = useState(0);

  function handlOutSide(){
    setClick(click + 1);
  }

  function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

  function ColourManger(){
    const colour = getRandomColor();
    container.style.backgroundColor = colour;
  }

  return (
   <div>
    <div id='container' onClick={handlOutSide}>
      <Colour getRandomColor={ColourManger}/>

    </div>
    
    <h1>Number of clicks: {click}</h1>
   </div>
  )
}

export default App
