import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import "./Signup.css";
import jwt_decode from "jwt-decode";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";

const Signup = ({userCreate}) => {

  const history = useNavigate();


  const googleSuccess = async (res) => {
    try {
    console.log(JSON.stringify(res));
    const result = jwt_decode(res?.tokenObj.id_token);
    const token = res?.tokenObj.id_token;
    console.log(result);
  
    
    localStorage.setItem("profile", JSON.stringify({user:result,token:token }));



history('/');
  window.location.reload();

    } catch (error) {
      console.log(error);
    }
  };

  const responseGoogle = (response) => {
    console.log("vhhvjhv" + response);
  };
  /* eslint-disable */
  useEffect(() => {
    /* global google */
    function start() {
      gapi.client.init({
        clientId:
          "388968919560-qgk4usj0ojm9941jr308kae0t00dq5e4.apps.googleusercontent.com",
        scope: "",
      });
    }
    gapi.load("client:auth2", start);
    ReactDOM.render(
      <GoogleLogin
        clientId="388968919560-qgk4usj0ojm9941jr308kae0t00dq5e4.apps.googleusercontent.com"
        buttonText="Login With Google"
        onSuccess={googleSuccess}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />,
      document.getElementById("signInDiv")
    );
  }, []);


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

           <div id="signInDiv"></div>
        </div>
      </form>
      <Footer />
    </>
  );
};

export default Signup;
