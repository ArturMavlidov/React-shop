import React from "react";

import "./style.css";

export default function BasketItem(props) {
  const {
    id,
    name,
    price,
    quanity,
    removeFromBasket = Function.prototype,
    incQuantity,
    decQuantity,
  } = props;

  return (
    <li className="collection-item basket-item">
      {/* <span onClick={() => decQuantity(id)}>-</span>
      <span onClick={() => incQuantity(id)}>+</span> */}
      {name}{" "}
      <i className="material-icons basket-btn" onClick={() => decQuantity(id)}>
        remove
      </i>{" "}
      x {quanity}{" "}
      <i className="material-icons basket-btn" onClick={() => incQuantity(id)}>
        add
      </i>
      = {price * quanity} руб.
      <span href="#!" className="secondary-content">
        <i
          className="material-icons basket-delete"
          onClick={() => removeFromBasket(id)}>
          close
        </i>
      </span>
    </li>
  );
}
