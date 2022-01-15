import React from 'react'

import './style.css'

export default function Cart({ quanity = 0, handleBasketShow = Function.prototype}) {
  return (
    <div className="cart light-blue darken-4 white-text" onClick={handleBasketShow}>
      <i className="material-icons">shopping_cart</i>
      {quanity ? <span className="cart-quanity">{quanity}</span> : null}
    </div>
  );
}
