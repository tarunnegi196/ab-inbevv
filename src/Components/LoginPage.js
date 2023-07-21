import React, { useState } from 'react';
import './LoginPage.css'; // Import the CSS file for styling

const LoginPage = ({ onNext }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Basic email and password validation
    if (!email || !password) {
      setError('Please enter both email and password.');
    } else if (!isValidEmail(email)) {
      setError('Please enter a valid email address.');
    } else {
      onNext({ email, password });
    }
  };

  const isValidEmail = (email) => {
    // Add your email validation logic here
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <div className="login-form-container">
      <h2 className="form-heading">Login Form</h2>
      <div className="form-group">
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      {error && <div className="error">{error}</div>}
      <button className="form-btn" onClick={handleLogin}>Next</button>
    </div>
  );
};

export default LoginPage;
