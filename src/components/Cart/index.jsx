import { useContext } from "react";
import { ShopContext } from "../../context";

import "./style.css";

export default function Cart() {
  const state = useContext(ShopContext);

  return (
    <div
      className="cart light-blue darken-4 white-text"
      onClick={state.handleBasketShow}
    >
      <i className="material-icons">shopping_cart</i>
      {state.order.length ? (
        <span className="cart-quantity">{state.order.length}</span>
      ) : null}
    </div>
  );
}
