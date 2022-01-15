import React from "react";

import './style.css'

export default function BasketItem({ id, name, price, quanity, removeFromBasket = Function.prototype}) {
  return (
    <li className="collection-item basket-item">
      {name} x {quanity} = {price * quanity}
      <span href="#!" className="secondary-content">
        <i className="material-icons basket-delete" onClick={() => removeFromBasket(id)}>close</i>
      </span>
    </li>
  );
}
