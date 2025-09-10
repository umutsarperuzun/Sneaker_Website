import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './Home'; 
import AboutUs from './AboutUs';
import ContactUs from './ContactUs'; 
import ItemDetails from './ItemDetails';
import Login from './Login';
import Signup from './Signup';
import ShowCart from './ShowCart';
import MyOrder from './MyOrder';
import PreviousOrders from './PreviousOrders';
import Footer from './Footer'; 
import { useAuth } from './AuthContext';
import './App.css'; // Import the CSS file

const App = () => {
  const { isAuthenticated, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Router>



      <div className="app-container">

        <header className="navbar">

          <div className="navbar-logo">
            <Link to="/">
              <img src='.\images\main\trylogo6.png' alt='Logo' className="logo" />
            </Link>
          </div>



          <div className="navbar-brand">
            <Link to="/" className="brand-link">
              <h1>Strider Luxe</h1>
            </Link>
          </div>


          <div className={ ` menu-items ${menuOpen ? 'open' : ''}`}>

            <Link to="/" className="menu-link px-2">Home</Link>

            <Link to="/contact-us" className="menu-link px-2">Contact Us</Link>

            <Link to="/about-us" className="menu-link px-2">About Us</Link>

            {
            isAuthenticated ? (

              <>
                <Link to="/order-history" className="menu-link px-2">Order History</Link>
                <button onClick={logout} className='logout-button'>Logout</button>
              </>

            ) : (<Link to="/login" className="menu-link px-2">Login</Link>)
            }



            <Link to="/cart" className="menu-link px-2">
              <img src='.\images\main\icons8-cart-64.png' alt='Cart' className="cart-icon" />
            </Link>

          </div>

          <div className="burger-menu" onClick={toggleMenu}>

            <div className={ `burger-bar ${menuOpen ? 'open' : ''}`}></div>

            <div className={ `burger-bar ${menuOpen ? 'open' : ''}`}></div>
            
            <div className={ `burger-bar ${menuOpen ? 'open' : ''}`}></div>

          </div>

        </header>

        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/items/:id" element={<ItemDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/cart" element={<ShowCart />} />
            <Route path="/my-order" element={<MyOrder />} />
            <Route path="/order-history" element={<PreviousOrders />} />
          </Routes>
        </main>

       <Footer /> 
      </div>
    </Router>
  );
};

export default App;