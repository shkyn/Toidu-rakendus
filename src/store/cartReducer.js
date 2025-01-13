export const cartReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_ITEM':
        const existingItemIndex = state.items.findIndex(
          (item) => item.id === action.payload.id
        );
        const existingItem = state.items[existingItemIndex];
  
        let updatedItems;
  
        if (existingItem) {
          const updatedItem = {
            ...existingItem,
            quantity: existingItem.quantity + 1,
          };
          updatedItems = [...state.items];
          updatedItems[existingItemIndex] = updatedItem;
        } else {
          const newItem = {
            ...action.payload,
            quantity: 1,
          };
          updatedItems = [...state.items, newItem];
        }
  
        return {
          ...state,
          items: updatedItems,
        };
  
      case 'CLEAR_CART':
        return {
          ...state,
          items: [], // Tühjendame ostukorvi
        };
  
      default:
        return state;
    }
  };