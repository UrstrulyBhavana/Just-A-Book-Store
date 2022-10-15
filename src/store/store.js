import { compose, createStore, applyMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";

import { cartReducer } from "./cart/cart.reducer";



const middleWares = [process.env.NODE_ENV === 'development' && logger].filter(
    Boolean
    );
    
const composeEnhancer =
    (process.env.NODE_ENV !== 'production' &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;
    
const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));
    
export const store = createStore(
    cartReducer,
    undefined,
    composedEnhancers
  );
