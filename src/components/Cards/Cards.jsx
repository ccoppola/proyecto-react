import React from 'react'
import Button from '../Button/Button'
import './cards.css'

const Cards = (props) => {
  return (
    <>
        <div className='card'>
          <div className='card-img'>
            <img src={props.img} alt={props.title}></img>
          </div>
          <div className='crad-detalle'>
              <h2>{props.nombre}</h2>
              <h4>${props.precio}</h4>
              <p>{props.detalle}</p>
          </div>
        </div>
        <Button texto="Comprar"/>
    </>
  )
}

export default Cards


