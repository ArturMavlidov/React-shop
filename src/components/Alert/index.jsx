import React, { useContext, useEffect } from "react";
import { ShopContext } from "../../context";

import "./style.css";

export default function Alert() {
  const {name, closeAlert} = useContext(ShopContext);

  useEffect(() => {
    const timerId = setTimeout(() => {
      closeAlert();
    }, 3000);

    return () => {
      clearTimeout(timerId);
    };
  }, [name]);

  return (
    <div id="toast-container">
      <div className="toast">{name} добавлен в корзину</div>
    </div>
  );
}
