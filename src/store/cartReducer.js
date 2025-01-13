export const cartReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_ITEM':
        // Kontrollime, kas toode on juba ostukorvis
        const existingItemIndex = state.items.findIndex(
          (item) => item.id === action.payload.id
        );
        const existingItem = state.items[existingItemIndex];
  
        let updatedItems;
  
        if (existingItem) {
          // Kui toode on juba ostukorvis, suurendame kogust
          const updatedItem = {
            ...existingItem,
            quantity: existingItem.quantity + 1,
          };
          updatedItems = [...state.items];
          updatedItems[existingItemIndex] = updatedItem;
        } else {
          // Kui toodet pole ostukorvis, lisame selle koos kogusega 1
          const newItem = {
            ...action.payload,
            quantity: 1,
          };
          updatedItems = [...state.items, newItem];
        }
  
        // Tagastame uuendatud seisundi
        return {
          ...state,
          items: updatedItems,
        };
  
      default:
        return state;
    }
  };