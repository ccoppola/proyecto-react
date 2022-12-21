import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

library.add(faCartShopping);

const CardWidget = () => {
  return (
      <FontAwesomeIcon icon="fa-cart-shopping"/>
  )
}
export default CardWidget