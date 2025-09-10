import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'; // Import the Main CSS file

const PreviousOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const userId = sessionStorage.getItem('userId'); // Assuming userId is stored in session

  useEffect(() => {
    const fetchOrderHistory = async () => {
      try {
        const response = await axios.get(`http://localhost:5500/order-history/${userId}`);
        setOrders(response.data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching order history');
        setLoading(false);
      }
    };

    fetchOrderHistory();
  }, [userId]);

  if (loading) return <p className="loading">Loading...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="order-history-container py-5">
      <h2 className="mb-4">Your Order History</h2>
      {orders.length === 0 ? (
        <div className="no-orders-container">
          <p className="no-orders">No orders found.</p>
        </div>
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th>Order Number</th>
                <th>Order Date</th>
                <th>Total Items</th>
                <th>Total Price</th>
              </tr>
            </thead>
            <tbody>
              {orders.map(order => (
                <tr key={order.orderId}>
                  <td>{order.orderId}</td>
                  <td>{new Date(order.orderDate).toLocaleDateString()}</td>
                  <td>{order.totalItems}</td>
                  <td>£{(order.totalPrice || 0).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default PreviousOrders;


