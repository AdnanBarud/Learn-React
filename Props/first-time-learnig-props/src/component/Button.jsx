import React from 'react'
import Count from './Count'

const Button = (props) => {
  return (
    <div>
        {props.count}
        <button onClick={props.handelClick} >{props.children} </button>
    </div>
  )
}

export default Button