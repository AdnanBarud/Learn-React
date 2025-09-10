import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../App'
const ChildC = () => {
    const data=useContext(UserContext);
  return (
    <div>
        s
        data: {data}
    
    </div>
  )
}

export default ChildC