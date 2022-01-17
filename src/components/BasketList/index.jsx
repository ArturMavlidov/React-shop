import { useContext } from "react";

import { ShopContext } from "../../context";
import { BasketItem } from "../index";

import "./style.css";

export default function BasketList() {
  const state = useContext(ShopContext);

  const totalPrice = state.order.reduce((acc, prev) => {
    return prev.price * prev.quantity + acc;
  }, 0);

  return (
    <ul className="collection basket-list">
      <li className="collection-item active">Корзина</li>
      {state.order.length ? (
        state.order.map((item) => {
          return <BasketItem key={item.id} {...item} />;
        })
      ) : (
        <li className="collection-item">Корзина пуста</li>
      )}
      <li className="collection-item active">
        Общая стоимость: {totalPrice} руб.
        <button className="secondary-content btn--small  teal lighten-1 btn-order">
          Оформить
        </button>
      </li>
      <i
        className="material-icons basket-close"
        onClick={state.handleBasketShow}
      >
        close
      </i>
    </ul>
  );
}
