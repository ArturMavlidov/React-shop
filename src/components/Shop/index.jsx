import React, { useEffect, useContext } from "react";
import { API_KEY, API_URL } from "../../config";

import { Preloader, GoodsList, Cart, BasketList, Alert } from "../index";
import { ShopContext } from "../../context";

export default function Shop() {
  const state = useContext(ShopContext);

  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        data.shop && state.setGoods(data.shop);
        state.setLoading(false);
      });
  }, []);

  return (
    <main className="container content">
      <Cart />
      {state.loading ? <Preloader /> : <GoodsList goods={state.goods} />}
      {state.isBasketShow && <BasketList />}
      {state.alertName && <Alert />}
    </main>
  );
}
