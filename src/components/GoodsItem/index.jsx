import React from "react";

import './style.css'

export default function GoodsItem(props) {
  const {
    mainId: id,
    displayName: name,
    displayDescription: description,
    addToBasket = Function.prototype,
  } = props;

  const { finalPrice: price } = props.price;
  const { full_background: background } = props.displayAssets[0];

  return (
    <div className="card">
      <div className="card-image">
        <img src={background} alt={name} />
      </div>
      <div className="card-content">
        <span className="card-title">{name || "Название"}</span>
        <p>{description || "Описания пока что нет"}</p>
      </div>
      <div className="card-action">
        <button
          className="btn"
          onClick={() =>
            addToBasket({
              id,
              name,
              price,
            })
          }
        >
          Купить
        </button>
        <span className="right" style={{ fontSize: "1.8rem" }}>
          {price} руб.
        </span>
      </div>
    </div>
  );
}
