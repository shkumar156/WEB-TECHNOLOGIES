// Signup.js
import React, { useState } from "react";
import axios from "axios";
import { API } from "../App";

const Signup = () => {
  const [userData, setUserData] = useState({
    userName: "",
    email: "",
    password: "",
    // Add other fields as needed
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await API.post("/signup", userData);
      console.log("Signup successful:", response.data);
    } catch (error) {
      console.error("Signup failed:", error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="userName">Username:</label>
        <input
          type="text"
          id="userName"
          name="userName"
          value={userData.userName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={userData.password}
          onChange={handleChange}
          required
        />
      </div>
      {/* Add other input fields as needed */}
      <div>
        <button type="submit">Sign Up</button>
      </div>
    </form>
  );
};

export default Signup;
