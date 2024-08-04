/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";
import UReducer, { userInitialState } from "./User/UserReducer";
import CartReducer, { cartInitialState } from "./Cart/CartReducer";

//We will need to eventually combine them
// eslint-disable-next-line react/prop-types
export const UserStore = ({ children }) => {
    const [state, dispatch] = useReducer(UReducer, userInitialState);

    return (
        <UserContext.Provider value={[state, dispatch]}>
            {children}
        </UserContext.Provider>
    );
};

export const CartStore = ({ children }) => {
    const [state, dispatch] = useReducer(CartReducer, cartInitialState);

    return (
        <CartContext.Provider value={[state, dispatch]}>
            {children}
        </CartContext.Provider>
    );
};

export const UserContext = createContext(userInitialState);
export const CartContext = createContext(cartInitialState);
