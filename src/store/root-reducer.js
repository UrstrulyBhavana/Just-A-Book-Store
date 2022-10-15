import { combineReducers } from "@reduxjs/toolkit";

import { cartReducer } from "./cart/cart.reducer";
import { homeReducer } from "./home/home.reducer";

export const rootReducer = combineReducers({
    home: homeReducer,
    cart: cartReducer
})