import { createStore } from "@reduxjs/toolkit"
import { cartReducer } from "./cart/cart.reducer";

export const store = createStore(cartReducer);
