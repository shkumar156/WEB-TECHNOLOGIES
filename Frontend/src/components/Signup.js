import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import "./Signup.css";

const Signup = ({userCreate}) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e,"data")
    const formData = {
      userName: e.target.elements.userName.value,
      email: e.target.elements.email.value,
      password: e.target.elements.password.value,
      gender: e.target.elements.gender.value,
      contactNumber: e.target.elements.contactNumber.value,
    };
    console.log(formData,"formData")
    userCreate(formData)
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
       
        <p className="Form_Text">
          Already have an account?{" "}
          <Link to="/customerlogin" id="login">
            Login
          </Link>
        </p>

        <div className="Form_Container">
          <h2>Sign Up</h2>

          <div className="Fields">
            <div>
              <label htmlFor="userName">Username:</label>
            </div>
            <div>
              <input type="text" id="userName" required />
            </div>
          </div>

          <div className="Fields">
            <div>
              <label htmlFor="email">Email:</label>
            </div>
            <div>
              <input type="email" id="email" required />
            </div>
          </div>

          <div className="Fields">
            <div>
              <label htmlFor="password">Password:</label>
            </div>
            <div>
              <input type="password" id="password" required />
            </div>
          </div>

          <div className="Fields">
            <label id="gender" htmlFor="gender">
              Gender:
            </label>
            <input type="radio" name="gender" value="male" required />
            <label htmlFor="genderMale" id="genderMale">
              Male
            </label>
            <input type="radio" id="genderFemale" name="gender" value="female" required />
            <label htmlFor="genderFemale">Female</label>
          </div>

          <div className="Fields">
            <div>
              <label htmlFor="contactNumber">Contact Number:</label>
            </div>
            <div>
              <input type="tel" id="contactNumber" pattern="[0-9]*" required />
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

export default Signup;
