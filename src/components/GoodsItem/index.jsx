import React, { useContext, memo } from "react";

import { ShopContext } from '../../context'

import "./style.css";

export default memo(function GoodsItem(props) {
  const {
    mainId: id,
    displayName: name,
    displayDescription: description,
  } = props;


  const { addToBasket } = useContext(ShopContext)

  const { finalPrice: price } = props.price;
  const { full_background: background } = props.displayAssets[0];

  return (
    <div className="row">
      <div className="col s12 m12">
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
      </div>
    </div>
  );
});
