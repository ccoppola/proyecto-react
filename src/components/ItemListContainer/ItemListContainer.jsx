import React from 'react'
import './itemListContainer.css'

const ItemListContainer = (props) => {
  return (
    <div className='item-list'>
        <h3 className='titulo-itemlist'>{props.gretting}</h3>
    </div>
  )
}

export default ItemListContainer