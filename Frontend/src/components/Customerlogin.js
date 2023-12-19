import React, { useState } from "react";
import Footer from "./Footer";
import "./customerlogin.css";

const Customerlogin = ({ userLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { email, password };
    userLogin(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="Login_Container">
          <h2>Login</h2>

          <div className="Fields">
            <div>
              <label htmlFor="email">Email:</label>
            </div>
            <div>
              <input
                type="text"
                id="email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="Fields">
            <div>
              <label htmlFor="password">Password:</label>
            </div>
            <div>
              <input
                type="password"
                id="password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="button_container">
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
      <Footer />
    </>
  );
};

export default Customerlogin;
