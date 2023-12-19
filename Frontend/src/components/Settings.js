import React, { useState, useEffect } from 'react';
import '../components/settings.css';

function Settings() {
  const [settings, setSettings] = useState({
    username: '',
    email: '',
    password: '', // Add a password field
  });

  const [savedSuccessfully, setSavedSuccessfully] = useState(false);

  useEffect(() => {
    // Code for side effects on mount
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === 'checkbox' ? checked : value;

    setSettings({ ...settings, [name]: val });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle form submission or settings update here
    console.log('Updated settings:', settings);

    // Indicate that the save was successful
    setSavedSuccessfully(true);

    // Clear the success message after a delay (e.g., 3 seconds)
    setTimeout(() => {
      setSavedSuccessfully(false);
    }, 3000);
  };

  return (
    <div className="settings-container">
      <h2>Settings</h2>
      {savedSuccessfully && <div className="success-message saved">Saved successfully!</div>}
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={settings.username}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={settings.email}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Change Password: {/* Add the Change Password field */}
          <input
            type="password"
            name="password"
            value={settings.password}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default Settings;
