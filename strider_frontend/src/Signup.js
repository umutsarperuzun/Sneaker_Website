// src/Signup.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './App.css'; // Import the CSS file for styling

const Signup = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    postCode: '',
    address: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5500/signup', formData);
      alert('Signup successful, please login.');
      navigate('/login'); // Redirect to login after successful signup
    } catch (error) {
      console.error('Signup error:', error.response ? error.response.data : error);
      alert('Error during signup.');
    }
  };

  return (
    <div className='signup-container'>
      <h2 className='signup-heading'>Create an Account</h2>
      <form onSubmit={handleSubmit} className='signup-form'>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className='signup-input'
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className='signup-input'
          required
        />
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className='signup-input'
          required
        />
        <input
          type="text"
          name="postCode"
          placeholder="Postal Code"
          value={formData.postCode}
          onChange={handleChange}
          className='signup-input'
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          className='signup-input'
          required
        />
        <button type="submit" className='signup-button'>Signup</button>
      </form>
    </div>
  );
};

export default Signup;

