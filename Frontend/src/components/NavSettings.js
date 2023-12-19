import React, { useState } from 'react';

function NavSettings() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // You can store the user's preference in local storage or a state management solution for a more permanent effect.
  };

  return (
    <div>
      <h2>Settings</h2>
      <label>
        Dark Mode:
        <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
      </label>
    </div>
  );
}

export default NavSettings;
