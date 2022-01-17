import React, { useContext } from "react";
import { ShopContext } from "../../context";

import "./style.css";

export default function BasketItem(props) {
  const state = useContext(ShopContext);
  const { id, name, price, quantity } = props;

  return (
    <li className="collection-item basket-item">
      {name}
      <i
        className="material-icons basket-btn"
        onClick={() => state.decQuantity(id)}
      >
        remove
      </i>
      x {quantity}
      <i
        className="material-icons basket-btn"
        onClick={() => state.incQuantity(id)}
      >
        add
      </i>
      = {price * quantity} руб.
      <span href="#!" className="secondary-content">
        <i
          className="material-icons basket-delete"
          onClick={() => state.removeFromBasket(id)}
        >
          close
        </i>
      </span>
    </li>
  );
}
