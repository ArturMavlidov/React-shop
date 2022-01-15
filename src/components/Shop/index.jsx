import React, { useState, useEffect } from "react";
import { API_KEY, API_URL } from "../../config";

import { Preloader, GoodsList, Cart, BasketList } from "../index";

export default function Shop() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isBasketShow, setBasketShow] = useState(false);

  const addToBasket = (item) => {
    const itemIndex = order.findIndex((orderItem) => orderItem.id == item.id);

    if (itemIndex < 0) {
      const newItem = { ...item, quanity: 1 };
      setOrder([...order, newItem]);
    } else {
      const newOrder = order.map((orderItem, index) => {
        if (index === itemIndex) {
          return {
            ...orderItem,
            quanity: orderItem.quanity + 1,
          };
        } else {
          return orderItem;
        }
      });

      setOrder(newOrder);
    }
  };

  const handleBasketShow = () => {
    setBasketShow(!isBasketShow)
  }

  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        data.shop && setGoods(data.shop);
        setLoading(false);
      });
  }, []);

  return (
    <main className="container content">
      <Cart quanity={order.length} handleBasketShow={handleBasketShow} />
      {loading ? (
        <Preloader />
      ) : (
        <GoodsList goods={goods} addToBasket={addToBasket} />
      )}
      {isBasketShow && (
        <BasketList order={order} handleBasketShow={handleBasketShow} />
      )}
    </main>
  );
}
