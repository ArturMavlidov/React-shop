import React from "react";

import './style.css'

export default function BasketItem({id, name, price, quanity}) {
  return (
    <li className="collection-item">
      {name} x {quanity} = {price}
      <span href="#!" className="secondary-content">
        <i className="material-icons basket-delete">close</i>
      </span>
    </li>
  );
}
