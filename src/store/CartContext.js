import React, { useState, createContext } from 'react';

// Loome konteksti
export const CartContext = createContext({
  items: [], // Valitud toidud
  addItem: () => {}, // Funktsioon toidu lisamiseks
});

// Loome CartContextProvider komponendi
export const CartContextProvider = ({ children }) => {
  const [items, setItems] = useState([]); // Hoiame valitud toidud siin

  // Funktsioon toidu lisamiseks
  const addItem = (meal) => {
    setItems((prevItems) => [...prevItems, meal]);
  };

  // Väärtus, mida kontekst pakub
  const contextValue = {
    items,
    addItem,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};