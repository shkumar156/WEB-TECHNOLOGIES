import React, { useState, useEffect } from 'react';
import Admindash from './Admindash';
import './login.css';
import Footer from './Footer'; // Import your Footer component

const Login = ({adminLogin}) => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [formErrors, setFormErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);

  useEffect(() => {
    // Check if the form data is valid
    const isUsernameValid = formData.username.length >= 6;
    const isPasswordValid = formData.password.length >= 8;

    // Set formErrors and isFormValid accordingly
    setFormErrors({
      username: isUsernameValid ? '' : 'At least 6 characters.',
      password: isPasswordValid ? '' : 'At least 8 characters.',
    });

    setIsFormValid(isUsernameValid && isPasswordValid);
  }, [formData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = formData.username.toLowerCase();
    const password = formData.password.toLowerCase();
    adminLogin({email,password})
  }
  return (
    <div>
      
      <div className="login-form">
        <div className='form-container'>
          <h1>Login</h1>
          {loginSuccess ? (
            <div className="success-message">Login successful!</div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className='label' htmlFor="username">Username (Email)</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  required
                />
                <span className="error-message">{formErrors.username}</span>
              </div>
              <div className="form-group">
                <label className='label' htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
                <span className="error-message">{formErrors.password}</span>
              </div>
              <button className="btn btn-outline-light" type="submit">Login</button>
            </form>
          )}
        </div>
      
      </div>
      <Footer /> {/* Include your Footer component here */}
    </div>
  );
}

export default Login;
