import { createContext, useReducer } from "react";
import reducer from "./reducer";

const initialState = {
  goods: [],
  loading: true,
  order: [],
  isBasketShow: false,
  alertName: "",
};

export const ShopContext = createContext();

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  state.setGoods = (data) => {
    dispatch({ type: "SET_GOODS", payload: data });
  };

  state.setLoading = (payload) => {
    dispatch({ type: "SET_LOADING", payload });
  };

  state.addToBasket = (item) => {
    dispatch({ type: "ADD_TO_BASKET", payload: item });
  };

  state.removeFromBasket = (itemId) => {
    dispatch({ type: "REMOVE_FROM_BASKET", payload: { id: itemId } });
  };

  state.handleBasketShow = () => {
    dispatch({ type: "TOGGLE_BASKET" });
  };

  state.incQuantity = (itemId) => {
    dispatch({ type: "INC_QUANTITY", payload: { id: itemId } });
  };

  state.decQuantity = (itemId) => {
    dispatch({ type: "DEC_QUANTITY", payload: { id: itemId } });
  };

  state.closeAlert = () => {
    dispatch({ type: "CLOSE_ALERT" });
  };

  return <ShopContext.Provider value={state}>{children}</ShopContext.Provider>;
};
