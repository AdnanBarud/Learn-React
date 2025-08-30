import { useState } from 'react'

import './App.css'
import Logout from './components/Logout'
import Login from './components/Login'

function App() {
  
  const [IsLoggedIn, setIsLoggedIn] = useState(true)

  return (
    <div>
      {IsLoggedIn && <Logout /> }
    </div>
  )

  // return (
  //   <div className="App">
  //     {IsLoggedIn ? <Logout /> : <Login />}
  //   </div>
  // )
 
      // if(IsLoggedIn){
      //   return( 
      //   <div> <Logout /> </div>
      //   )
      // }
      // else{
      //   return(
      //     <div> <Login /> </div>
      //   )
      // }
    
  
}

export default App
