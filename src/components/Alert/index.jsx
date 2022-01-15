import React, { useEffect } from "react";

import './style.css'

export default function Alert({ name = '', closeAlert = Function.prototype }) {
  useEffect(() => {
    const timerId = setTimeout(() => {
      closeAlert();
    }, 3000)

    return () => {
      clearTimeout(timerId)
    }
  }, [name])

  return (
    <div id="toast-container">
      <div className="toast">{name} добавлен в корзину</div>
    </div>
  );
}
