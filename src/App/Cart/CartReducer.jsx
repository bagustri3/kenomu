/* eslint-disable no-unused-vars */
import {
    CART_ADD_ITEM,
    CART_REMOVE_ITEM,
    CART_SAVE_PAYMENT_METHOD,
    CART_SAVE_SHIPPING_ADDRESS,
} from "./CartType";

import Cookies from "universal-cookie";

const cookiesRead = new Cookies();

let cartItems = cookiesRead.get("cartItems");
if (cartItems && cartItems.length > 0) {
    cartItems = JSON.parse(cartItems);
} else {
    cartItems = [];
}

export const cartInitialState = {
    cartItems: cartItems,
};

const CartReducer = (state = cartInitialState, action) => {
    switch (action.type) {
        case CART_ADD_ITEM:
            // eslint-disable-next-line no-case-declarations
            const item = action.payload;
            // eslint-disable-next-line no-case-declarations
            const existItem = state.cartItems.find(
                (x) => x.product === item.product
            );
            if (existItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(
                        (x) => (x.product === existItem.product ? item : x) //update
                    ),
                };
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item],
                };
            }

        case CART_REMOVE_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter(
                    (x) => x.product !== action.payload
                ),
            };
        case CART_SAVE_SHIPPING_ADDRESS:
            return {
                ...state,
                shippingAddress: action.payload,
            };
        case CART_SAVE_PAYMENT_METHOD:
            return {
                ...state,
                paymentMethod: action.payload,
            };

        default:
            return state;
    }
};

export default CartReducer;
