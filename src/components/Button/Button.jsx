import React from 'react'
import "./button.css"

const Button = (props) => {
  return (
    <button className='buttonComprar'>{props.texto}</button>
  )
}
export default Button