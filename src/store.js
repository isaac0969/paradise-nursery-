// store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice'; // Importing the cartReducer from CartSlice

// Configuring the Redux store
const store = configureStore({
  reducer: {
    cart: cartReducer, // The cart slice is managed by cartReducer
  },
});

export default store; // Export the store for use in the app
