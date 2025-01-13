import React, { useReducer, createContext } from 'react';
import { cartReducer } from './cartReducer';

const initialState = {
  items: [],
};

export const CartContext = createContext({
  items: [],
  addItem: () => {},
  clearCart: () => {},
  totalQuantity: 0,
});

export const CartContextProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, initialState);

  const addItem = (meal) => {
    dispatch({ type: 'ADD_ITEM', payload: meal });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const totalQuantity = cartState.items.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const contextValue = {
    items: cartState.items,
    addItem,
    clearCart,
    totalQuantity,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};