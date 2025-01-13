import React, { useState, createContext } from 'react';

// Loome konteksti
export const CartContext = createContext({
  items: [], // Valitud toidud koos kogustega
  addItem: () => {}, // Funktsioon toidu lisamiseks
  totalQuantity: 0, // Ostukorvi kogusumma
});

// Loome CartContextProvider komponendi
export const CartContextProvider = ({ children }) => {
  const [items, setItems] = useState([]); // Hoiame valitud toidud koos kogustega siin

  // Funktsioon toidu lisamiseks
  const addItem = (meal) => {
    setItems((prevItems) => {
      // Kontrollime, kas toode on juba ostukorvis
      const existingItemIndex = prevItems.findIndex((item) => item.id === meal.id);
      const existingItem = prevItems[existingItemIndex];

      let updatedItems;

      if (existingItem) {
        // Kui toode on juba ostukorvis, suurendame kogust
        const updatedItem = {
          ...existingItem,
          quantity: existingItem.quantity + 1,
        };
        updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = updatedItem;
      } else {
        // Kui toodet pole ostukorvis, lisame selle koos kogusega 1
        const newItem = {
          ...meal,
          quantity: 1,
        };
        updatedItems = [...prevItems, newItem];
      }

      return updatedItems;
    });
  };

  // Arvutame ostukorvi kogusumma
  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);

  // Väärtus, mida kontekst pakub
  const contextValue = {
    items,
    addItem,
    totalQuantity,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};