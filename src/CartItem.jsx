import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items); // Get the cart items from Redux store
  const dispatch = useDispatch();

  // Calculate the total amount for all products in the cart
  const calculateTotalAmount = () => {
    return cart
      .reduce((total, item) => total + parseFloat(item.cost.substring(1)) * item.quantity, 0) // Sum up total price for all items
      .toFixed(2); // Return total cost rounded to 2 decimal places
  };

  // Handle continue shopping button click
  const handleContinueShopping = () => {
    onContinueShopping(); // Trigger the onContinueShopping callback passed from the parent component
  };

  // Handle increment of item quantity
  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 })); // Dispatch action to increment item quantity in Redux store
  };

  // Handle decrement of item quantity
  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 })); // Dispatch action to decrement item quantity
    } else {
      dispatch(removeItem(item.name)); // If quantity drops to 0, remove the item from the cart
    }
  };

  // Handle remove item from cart
  const handleRemove = (item) => {
    dispatch(removeItem(item.name)); // Dispatch action to remove item from cart in Redux store
  };

  // Calculate total cost for each item (item cost * quantity)
  const calculateTotalCost = (item) => {
    return (parseFloat(item.cost.substring(1)) * item.quantity).toFixed(2); // Multiply cost by quantity and round to 2 decimal places
  };

  // Placeholder for Checkout functionality
  const handleCheckoutShopping = () => {
    alert('Functionality to be added for future reference'); // Alert for future checkout functionality
  };

  return (
    <div className="cart-container">
      <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount()}</h2>
      <div>
        {cart.map(item => (
          <div className="cart-item" key={item.name}>
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-cost">${item.cost}</div>
              <div className="cart-item-quantity">
                <button className="cart-item-button cart-item-button-dec" onClick={() => handleDecrement(item)}>-</button>
                <span className="cart-item-quantity-value">{item.quantity}</span>
                <button className="cart-item-button cart-item-button-inc" onClick={() => handleIncrement(item)}>+</button>
              </div>
              <div className="cart-item-total">Total: ${calculateTotalCost(item)}</div>
              <button className="cart-item-delete" onClick={() => handleRemove(item)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '20px', color: 'black' }} className="total_cart_amount"></div>
      <div className="continue_shopping_btn">
        <button className="get-started-button" onClick={handleContinueShopping}>Continue Shopping</button>
        <br />
        <button className="get-started-button1" onClick={handleCheckoutShopping}>Checkout</button>
      </div>
    </div>
  );
};

export default CartItem;
