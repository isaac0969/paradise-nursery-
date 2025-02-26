import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    // 1. addItem: Adds a new item to the cart, or updates the quantity if it already exists
    addItem: (state, action) => {
      const newItem = action.payload;
      // Check if item already exists in cart
      const existingItem = state.items.find(item => item.name === newItem.name);
      if (existingItem) {
        // If the item exists, increase the quantity
        existingItem.quantity += newItem.quantity;
      } else {
        // Otherwise, add the new item to the cart
        state.items.push(newItem);
      }
    },

    // 2. removeItem: Removes an item from the cart by its name
    removeItem: (state, action) => {
      const itemName = action.payload;
      // Filter out the item with the given name
      state.items = state.items.filter(item => item.name !== itemName);
    },

    // 3. updateQuantity: Updates the quantity of an item in the cart
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      // Find the item by name and update its quantity
      const item = state.items.find(item => item.name === name);
      if (item) {
        item.quantity = quantity; // Update the quantity to the new value
      }
    },
  },
});

// Export the actions to use in components
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

// Export the reducer to use in store
export default CartSlice.reducer;
