import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './App.css'; // Import updated CSS

const ItemDetails = () => {
  const [item, setItem] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedUnit, setSelectedUnit] = useState('EUR');
  const [selectedSize, setSelectedSize] = useState('');
  const [error, setError] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchItemDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5500/item/${id}`);
        setItem(response.data);
      } catch (error) {
        console.error('Error fetching item details', error);
      }
    };

    fetchItemDetails();
  }, [id]);

  const handleQuantityChange = (increment) => {
    setQuantity((prevQuantity) => {
      if (increment) {
        return prevQuantity + 1;
      }
      return prevQuantity > 1 ? prevQuantity - 1 : 1;
    });
  };

  const handleAddToCart = async () => {
    if (!selectedSize) {
      setError('Please select a size.');
      return;
    }
    setError('');

    const userId = sessionStorage.getItem('userId');
    if (!userId) {
      alert('Please log in to add items to the cart.');
      navigate('/login');
      return;
    }

    try {
      await axios.post('http://localhost:5500/cart', {
        userId,
        itemId: id,
        qty: quantity,
        size: selectedSize
      });
      alert('Item added to cart!');
    } catch (error) {
      console.error('Error adding item to cart', error);
      alert('Failed to add item to cart.');
    }
  };

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const sizeOptions = {
    EUR: [40, 41, 42, 43, 44, 45, 46],
    UK: [6, 7, 8, 9, 10, 11],
    US: [7, 8, 9, 10, 11, 12],
    CM: [25, 26, 27, 28, 29, 30]
  };

  if (!item) return <div>Loading...</div>;

  return (
    <div className="item-details">
      <img src={`/images/main/${item.photo}`} alt={item.name} className="item-image" />
      <div className="item-info">
        <h2 className="item-title">{item.name}</h2>
        <p className="item-description">{item.desc}</p>
        <p className="item-price">£{item.price}</p>

        <div className="size-selection">
          <div className="unit-selection">
            <button
              className={`unit-button ${selectedUnit === 'EUR' ? 'active' : ''}`}
              onClick={() => setSelectedUnit('EUR')}
            >
              EUR
            </button>
            <button
              className={`unit-button ${selectedUnit === 'UK' ? 'active' : ''}`}
              onClick={() => setSelectedUnit('UK')}
            >
              UK
            </button>
            <button
              className={`unit-button ${selectedUnit === 'US' ? 'active' : ''}`}
              onClick={() => setSelectedUnit('US')}
            >
              US
            </button>
            <button
              className={`unit-button ${selectedUnit === 'CM' ? 'active' : ''}`}
              onClick={() => setSelectedUnit('CM')}
            >
              CM
            </button>
          </div>
          <select
            className="size-select"
            value={selectedSize}
            onChange={handleSizeChange}
          >
            <option value="">Select Size</option>
            {sizeOptions[selectedUnit]?.map((size) => (
              <option key={size} value={size}>{size}</option>
            ))}
          </select>
          {error && <p className="error-message">{error}</p>}
        </div>

        <div className="quantity-controls">
          <button className='btn btn-primary' onClick={() => handleQuantityChange(false)}>-</button>
          <input type="text" value={quantity} className="quantity-input" readOnly />
          <button className='btn btn-primary' onClick={() => handleQuantityChange(true)}>+</button>
        </div>

        <div className="add-to-cart">
          <button className="add-to-cart-button" onClick={handleAddToCart}>Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;


