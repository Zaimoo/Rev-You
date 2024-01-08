import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import logo from '../logo.png';
import name from  '../site-name.png';
import background from '../login-background.jpg'

const mockAccounts = [
  {
    username: 'user1',
    password: 'password1',
  },
  {
    username: 'user2',
    password: 'password2',
  },
];

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
  
    const handleUsernameChange = (event) => {
      setUsername(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
  
    const handleLogin = () => {
      const foundAccount = mockAccounts.find(
        (account) => account.username === username && account.password === password
      );
  
      if (foundAccount) {
        const token = { username, password };
        navigate('/home');
        setError('');
        sessionStorage.setItem('token', JSON.stringify(token));
      } else {
        setError('Invalid username or password');
      }
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      handleLogin();
    };
  
    return (
    <>
    <div className='login-container' style={{ backgroundImage: `url(${background})` }}>
        <div className='login-content'>
          <div className='login-title'>
            <img src={logo} alt='logo'  />
            <img src={name} alt='site-name' />
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Username' value={username} onChange={handleUsernameChange} />
            <br />
            <input type="password" placeholder='Password' value={password} onChange={handlePasswordChange} />
            <br />
            <div className='forgot-password'>
            <span>Forgot Password</span>
            </div>

            <div className='remember-me'>
            <input type= 'checkbox' id='rememberMe'></input>
            <label for='rememberMe'>Remember Me?</label>
            </div>
            <button type="submit" className='green-btn1'>Log In</button>
            </form>
            <p>Don't have a RevYou Account? <span>Register Now!</span></p>

        </div>
    </div>
    
    </>
      
      
    );
  };
  
  export default Login;