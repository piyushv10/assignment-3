import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css'; // Import your CSS file


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      setEmail('');
    }
  };

  const validatePassword = () => {
    if (password.includes(' ') || !/[A-Z]/.test(password) || !/\d/.test(password) || /[^@a-zA-Z0-9]/.test(password)) {
      alert('Password must contain an uppercase letter, a number, and only the special character "@".');
      setPassword('');
    }
  };

  const handleLogin = () => {
    console.log("HI");
    if (password === 'SmartServTest@123') {
      // Redirect to the Dashboard component
      console.log('Redirecting to the Dashboard...');
      navigate('/dashboard');
    } else {
        
        console.log('incorrect...');
      alert('Incorrect password. Please try again.');
    }
  };

  const handleForgotPassword = () => {
    // Open default email client with pre-filled email
    window.location.href = `mailto:support@smartserv.io?subject=Password Reset&body=Please reset my password.`;
  };

  return (
    <div className="login-container">
        <div className='gray-container'>
            <div className='alignment'>
        <h2>Login</h2>
      {/* <label htmlFor="username">Email:</label> */}
      <input
        type="text"
        id="username"
        className='mg'
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onBlur={validateEmail}
      />

      {/* <label htmlFor="password">Password:</label> */}
      <input
        type="password"
        id="password"
        className='mg'
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        onBlur={validatePassword}
      />

      <button className='mg' type='button' onClick={handleLogin}>Login</button>

      <p>
        <a href="#" onClick={handleForgotPassword}>Forgot your password?</a>
      </p>
      
            </div>
        </div>
    </div>
  );
};

export default Login;
