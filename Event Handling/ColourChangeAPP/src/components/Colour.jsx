import React from 'react'

const Colour = (props) => {
  return (
    <div>
        <button onClick={ e =>{
            e.stopPropagation();
            props.getRandomColor();
        } }>Change Colour</button>
    </div>
  )
}

export default Colour