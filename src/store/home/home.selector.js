import { createSelector } from "@reduxjs/toolkit";

const selectHomeReducer = (state) => state.home;

export const selectHighlightedProduct = createSelector(
  [selectHomeReducer],
  (home) => home.highlightedProduct
);
