import React from 'react'

const Card1 = (props) => {
  return (
    <div>
       <input type='text' onChange={(e)=>props.setName(e.target.value)} />
       <p>{props.title}value {props.name}</p>
    </div>
  )
}

export default Card1