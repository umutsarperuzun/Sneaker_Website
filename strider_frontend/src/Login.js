import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from './AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import './App.css'; // Import to CSS file

const Login = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '', newPassword: '', confirmNewPassword: '' });
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [message, setMessage] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isForgotPassword) {
      handleForgotPassword();
    } else {
      handleLogin();
    }
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5500/login', credentials);
      if (response.data.userId) {
        login(response.data.userId);
        navigate('/');
      }
    } catch (error) {
      console.error('Login failed', error);
      setMessage('Login failed. Please check your credentials.');
    }
  };

  const handleForgotPassword = async () => {
    if (credentials.newPassword !== credentials.confirmNewPassword) {
      setMessage('Passwords do not match.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5500/reset-password', {
        email: credentials.email,
        newPassword: credentials.newPassword
      });
      setMessage(response.data.message);
      setIsForgotPassword(false);
    } catch (error) {
      console.error('Forgot password failed', error);
      setMessage('Error processing request. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>{isForgotPassword ? 'Reset Password' : 'Login'}</h2>
        <div className="input-group">
          <input
            type="email"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
        </div>
        {!isForgotPassword ? (
          <div className="input-group">
            <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              placeholder="Password"
              required
            />
          </div>
        ) : (
          <>
            <div className="input-group">
              <input
                type="password"
                name="newPassword"
                value={credentials.newPassword}
                onChange={handleChange}
                placeholder="New Password"
                required
              />
            </div>
            <div className="input-group">
              <input
                type="password"
                name="confirmNewPassword"
                value={credentials.confirmNewPassword}
                onChange={handleChange}
                placeholder="Confirm New Password"
                required
              />
            </div>
          </>
        )}
        <button type="submit" className="btn btn-primary">
          {isForgotPassword ? 'Reset Password' : 'Login'}
        </button>
        <div className="form-links">
          <p className="form-link">
            <Link to="/signup">Don't have an account? Sign up</Link>
          </p>
          <button
            type="button"
            className="btn btn-link toggle-link"
            onClick={() => setIsForgotPassword(!isForgotPassword)}
          >
            {isForgotPassword ? 'Back to Login' : 'Forgot Password?'}
          </button>
        </div>
        {message && <p className="message">{message}</p>}
      </form>
    </div>
  );
};

export default Login;




