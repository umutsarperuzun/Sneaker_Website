import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './ShowCart.css';

const ShowCart = () => {
  const [cartItems, setCartItems] = useState([]); // State to store cart items
  const [totalPrice, setTotalPrice] = useState(0); // State to store total price
  const navigate = useNavigate();

  // Get user ID from session storage
  const userId = sessionStorage.getItem('userId');

  // Fetch cart items when the component mounts
  useEffect(() => {
    if (!userId) {
      // If user is not logged in, redirect to login page
      alert('Please log in to view your cart.');
      navigate('/login');
      return;
    }

    // Function to fetch cart items from the server
    const fetchCartItems = async () => {
      try {
        const response = await axios.get(`http://localhost:5500/cart/${userId}`);
        setCartItems(response.data);
        // Calculate the total price of items in the cart
        const total = response.data.reduce((sum, item) => sum + item.qty * item.price, 0);
        setTotalPrice(total.toFixed(2));
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchCartItems();
  }, [userId, navigate]);

  // Function to handle quantity changes
  const handleQtyChange = (itemId, newQty) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.itemId === itemId ? { ...item, qty: newQty } : item
      )
    );
  };

  // Function to update the cart item on the server
  const handleUpdateCartItem = async (itemId, qty) => {
    try {
      await axios.put('http://localhost:5500/cart/update', { userId, itemId, qty });
      const response = await axios.get(`http://localhost:5500/cart/${userId}`);
      setCartItems(response.data);
      const total = response.data.reduce((sum, item) => sum + item.qty * item.price, 0);
      setTotalPrice(total.toFixed(2));
    } catch (error) {
      console.error('Error updating cart item:', error);
    }
  };

  // Function to increase item quantity
  const handleIncreaseQty = (itemId, currentQty) => {
    const newQty = currentQty + 1;
    handleQtyChange(itemId, newQty);
    handleUpdateCartItem(itemId, newQty);
  };

  // Function to decrease item quantity
  const handleDecreaseQty = (itemId, currentQty) => {
    if (currentQty > 1) {
      const newQty = currentQty - 1;
      handleQtyChange(itemId, newQty);
      handleUpdateCartItem(itemId, newQty);
    }
  };

  // Function to remove item from cart
  const handleRemoveCartItem = async (itemId) => {
    try {
      await axios.delete('http://localhost:5500/cart/remove', {
        data: { userId, itemId }
      });
      const updatedItems = cartItems.filter(item => item.itemId !== itemId);
      if (updatedItems.length === 0) {
        setCartItems([]);
        setTotalPrice(0);
      } else {
        setCartItems(updatedItems);
        const total = updatedItems.reduce((sum, item) => sum + item.qty * item.price, 0);
        setTotalPrice(total.toFixed(2));
      }
    } catch (error) {
      console.error('Error removing cart item:', error);
    }
  };

  // Function to confirm the order
  const handleConfirmOrder = async () => {
    if (!userId) {
      alert('Please log in to confirm your order.');
      navigate('/login');
      return;
    }

    try {
      await axios.post('http://localhost:5500/order', { userId });
      navigate('/my-order');
    } catch (error) {
      console.error('Error confirming order:', error);
    }
  };

  return (
    <div className='cart-page-container'>
      <header className='cart-page-header'>
        <h1>Your Shopping Cart</h1>
      </header>
      <div className='cart-page-content'>
        <aside className='cart-summary-section'>
          <h2>Order Summary</h2>
          <div className="total-price-display">
            <h3>Total: £{totalPrice}</h3>
          </div>
          <button className='btn confirm-order-button' onClick={handleConfirmOrder}>
            Confirm Order
          </button>
        </aside>
        <div className='cart-items-section'>
          {cartItems.length === 0 ? (
            <p className='empty-cart-notice'>Your cart is empty.</p>
          ) : (
            <>
              {cartItems.map((item) => (
                <div key={item.itemId} className="cart-item-box">
                  <img src={`/images/main/${item.photo}`} alt={item.name} />
                  <div className="item-details-section">
                    <h4>{item.name}</h4>
                    <p className="item-price-details">
                      £{item.price} x 
                      <input
                        type="number"
                        value={item.qty}
                        onChange={(e) => handleQtyChange(item.itemId, parseInt(e.target.value))}
                        min="1"
                        className="quantity-input"
                      />
                    </p>
                  </div>
                  <div className="item-actions-section">
                    <div className="quantity-control-buttons">
                      <button 
                        className="quantity-button" 
                        onClick={() => handleIncreaseQty(item.itemId, item.qty)}
                      >
                        Add
                      </button>
                      <button 
                        className="quantity-button" 
                        onClick={() => handleDecreaseQty(item.itemId, item.qty)}
                      >
                        Reduce
                      </button>
                    </div>
                    <button
                      className="btn remove-item-button"
                      onClick={() => handleRemoveCartItem(item.itemId)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShowCart;




