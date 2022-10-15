import { HOME_ACTION_TYPES } from "./home.types";
import { productsData } from "../../utils/products-data";

export const HOME_INITIAL_STATE = {
  highlightedProduct: productsData[0],
};

export const homeReducer = (state = HOME_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case HOME_ACTION_TYPES.SET_HIGHLIGHTED_PRODUCT:
      return {
        ...state,
        highlightedProduct: payload,
      };
    
    default:
      return state;
  }
};
