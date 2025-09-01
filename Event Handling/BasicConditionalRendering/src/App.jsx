import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function handelClick(){
    alert("button clicked");
  }

  function handelSubmit(e){
    e.preventDefault();
    alert("form submitted");
  }
  return (
    <div>
      
    <form >
      <input type="text"  />
      {/* <input type="password" placeholder='password' /> */}
      <input type="submit" value="submit" onClick={handelSubmit}/>
    </form>
    <button onClick={handelClick}>
      click me
    </button>
    </div>
  )
}

export default App
