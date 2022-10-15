import { createAction } from '../../utils/reducer/reducer.utils';
import { HOME_ACTION_TYPES } from "./home.types";


export const setHighlightedProduct = (product) => {
    return createAction(HOME_ACTION_TYPES.SET_HIGHLIGHTED_PRODUCT, product);
};