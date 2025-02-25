import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';  // You can adjust the path if needed
import { Provider } from 'react-redux';
import store from './store.js'; // Make sure the path to store.js is correct

// Render the app with the Provider to make Redux available throughout the app
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
