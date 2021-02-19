/* CART REDUCERS */
import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_SHIPPING_ADDRESS,
  CART_SAVE_PAYMENT_METHOD,
} from '../constants/cartConstants';

export const cartReducer = (
  state = { cartItems: [], shippingAddress: {} },
  action
) => {
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
    // save data: shipping
    case CART_SAVE_SHIPPING_ADDRESS:
      return {
        ...state,
        shippingAddress: action.payload,
      };
    // save data: payment
    case CART_SAVE_PAYMENT_METHOD:
      return {
        ...state,
        paymentMethod: action.payload,
      };
    default:
      return state;
  }
};
