import React, { useState, useEffect } from "react";
import { API_KEY, API_URL } from "../../config";

import { Preloader, GoodsList, Cart, BasketList, Alert } from "../index";

export default function Shop() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isBasketShow, setBasketShow] = useState(false);
  const [alertName, setAlertName] = useState('')

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

    setAlertName(item.name);
  };

  const removeFromBasket = (id) => {
    const changedOrder = order.filter((item) => item.id !== id);

    setOrder(changedOrder);
  };

  const incQuantity = (itemId) => {
    const newOrder = order.map((orderItem) => {
      if (orderItem.id === itemId) {
        return {
          ...orderItem,
          quanity: orderItem.quanity + 1,
        };
      } else {
        return orderItem;
      }
    });

    setOrder(newOrder);
  };

  const decQuantity = (itemId) => {
    const newOrder = order.map((orderItem) => {
      if (orderItem.id === itemId && orderItem.quanity > 1) {
        return {
          ...orderItem,
          quanity: orderItem.quanity - 1,
        };
      } else {
        return orderItem;
      }
    });

    setOrder(newOrder);
  };

  const handleBasketShow = () => {
    setBasketShow(!isBasketShow);
  };

  const closeAlert = () => {
    setAlertName('')
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
        <BasketList
          order={order}
          handleBasketShow={handleBasketShow}
          removeFromBasket={removeFromBasket}
          incQuantity={incQuantity}
          decQuantity={decQuantity}
        />
      )}
      {
        alertName && <Alert name={alertName} closeAlert={closeAlert}/>
      }
    </main>
  );
}
