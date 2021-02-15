/* CART REDUCERS */
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants';

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
      // is item is already in cartItems?
      const existItem = state.cartItems.find(
        (curr) => curr.product === item.product
      );
      // Yes? Return state. No? Spread across items and add new item.
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((curr) =>
            curr.product === existItem.product ? item : curr
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    // remove by id
    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((e) => e.product !== action.payload),
      };
    default:
      return state;
  }
};
