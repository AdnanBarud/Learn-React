import React, { useState } from 'react'

const Input = () => {
    const [value, setValue] = useState('')

    function handleClick() {
        console.log(value);
        
    }
        
  return (
    <div>
        <h1>Input</h1>
        <input 
            type="text"
            placeholder="Type here..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
        />

        <button
        onClick={handleClick}
        >Give Value</button>
        <p>Input value is: {value}</p>

    </div>
  )
}

export default Input