import React, { useReducer, createContext } from 'react';
import { cartReducer } from './cartReducer'; 

const initialState = {
  items: [], 
};

export const CartContext = createContext({
  items: [],
  addItem: () => {},
  totalQuantity: 0,
});

// Loome CartContextProvider komponendi
export const CartContextProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, initialState);

  const addItem = (meal) => {
    dispatch({ type: 'ADD_ITEM', payload: meal });
  };

  const totalQuantity = cartState.items.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const contextValue = {
    items: cartState.items,
    addItem,
    totalQuantity,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};