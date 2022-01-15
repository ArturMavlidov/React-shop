import React from "react";
import { BasketItem } from "../index";

import './style.css'

export default function BasketList({ order = [], handleBasketShow = Function.prototype }) {

  const totalPrice = order.reduce((acc, prev) => {
    return prev.price * prev.quanity + acc;
  }, 0)

  console.log(totalPrice);

  return (
    <ul className="collection basket-list">
      <li className="collection-item active">Корзина</li>
      {order.length ? (
        order.map((item) => {
          return <BasketItem key={item.id} {...item} />;
        })
      ) : (
        <li className="collection-item">Корзина пуста</li>
      )}
      <li className="collection-item active">Общая стоимость: {totalPrice} руб.</li>
      <i className="material-icons basket-close" onClick={handleBasketShow}>
        close
      </i>
    </ul>
  );
}
