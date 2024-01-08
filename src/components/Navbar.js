import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { IoPersonCircleOutline, IoChevronDown } from 'react-icons/io5';
import logo from '../logo.png';
import name from  '../site-name.png';

const Navbar = () => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const token = sessionStorage.getItem('token');
  const parsedToken = token ? JSON.parse(token) : null;
  const username = parsedToken ? parsedToken.username : null;

  const handleLogout = () => {
    sessionStorage.removeItem('token');
    setShowDropdown(false);
  };

  const toggleDropdown = () => {
    setShowDropdown((prevState) => !prevState);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className='logo-navigation-container'>
          <img src={logo} alt='logo' />
          <img src={name} alt='site-name' />

          <ul>
            <li>
              <NavLink 
                to="/home" 
                className={({ isActive }) => isActive ? 'active' : ''}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/reviewer-maker" 
                className={({ isActive }) => isActive ? 'active' : ''}
              >
                Reviewer Maker
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/about" 
                className={({ isActive }) => isActive ? 'active' : ''}
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/values" 
                className={({ isActive }) => isActive ? 'active' : ''}
              >
                Our Values
              </NavLink>
            </li>
          </ul>
        </div>

        <div className='nav-buttons'>
          {token ? (
            <div className='logged-in-container'>
            <span>Welcome, {username}!</span>
            <IoPersonCircleOutline
              className="person-icon"
              style={{ color: '#9BD046', cursor: 'pointer', fontSize: '3rem'}}
              onClick={handleLogout}
            />
            <div className='person-icon-container'>
              <IoChevronDown onClick={toggleDropdown} className={`dropdown-arrow ${showDropdown ? 'open' : ''}`} />
              {/* Apply inline styles based on the showDropdown state */}
              <ul className='dropdown' style={{ opacity: showDropdown ? 1 : 0, visibility: showDropdown ? 'visible' : 'hidden' }}>
                <li><button onClick={handleLogout}>Logout</button></li>
              </ul>
            </div>
          </div>
          ) : (
            <>
              <button className="trans-btn" onClick={() => navigate('/login')}>Login</button>
              <button className='green-btn'>Get Started</button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
