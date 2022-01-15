import React from 'react'
import { GoodsItem } from "../index";

import './style.css'

export default function GoodsList({ goods = [], addToBasket = Function.prototype }) {
  if (!goods.length) {
    return <h3>Nothing here</h3>;
  }

  return (
    <div className="goods">
      {goods.map((item) => {
        return (
          <GoodsItem key={item.mainId} {...item} addToBasket={addToBasket} />
        );
      })}
    </div>
  );
}
