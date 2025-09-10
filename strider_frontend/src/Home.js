import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './App.css'; // Import specific CSS for Home page

const Home = () => {
  const [items, setItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(`http://localhost:5500/items`);
        setItems(response.data);
        setFilteredItems(response.data);
      } catch (error) {
        console.error('Error fetching items', error);
      }
    };

    fetchItems();
  }, []);

  useEffect(() => {
    // Filter items based on search query and active category
    const filtered = items.filter(item => 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (activeCategory === 'All' || item.category === activeCategory)
    );
    setFilteredItems(filtered);
  }, [searchQuery, activeCategory, items]);

  return (
    <div className="home-container">
      {/* Navigation menu for categories */}
      <nav className="category-nav">
        {['All', 'Nike', 'Adidas', 'Jordan', 'Yeezy'].map((category) => (
          <button
            key={category}
            className={`category-button ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
        {/* Search box */}
        <input
          type="text"
          className="search-bar"
          placeholder="Search items..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </nav>

      {/* Display items */}
      <div className="items-container">
        {filteredItems.length === 0 ? (
          <div className="no-items-container">
            <p>No items found.</p>
          </div>
        ) : (
          filteredItems.slice(0, 12).map((item) => ( // Display a maximum of 12 items
            <div key={item._id} className="product-card">
              <img src={`/images/main/${item.photo}`} alt={item.name} className="product-image" />
              <div className="product-info">
                <h5 className="product-title">{item.name}</h5>
                <p className="product-price">£{item.price}</p>
                <button className='btn btn-primary' onClick={() => navigate(`/items/${item._id}`)}>Show Details</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;





