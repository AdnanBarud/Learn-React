import React, { useState } from 'react'

const Input = () => {

    const [todoitems, setTodoItems] = useState('')
  return (
    <div>
        <input
        
         type="text" 
         placeholder="Enter todo item" 
         value={todoitems}
         onChange={setTodoItems(e.target.value)}
         />
         
    </div>
  )
}

export default Input