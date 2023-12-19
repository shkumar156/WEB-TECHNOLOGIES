import React, { useState } from "react";
import "./contactLeft.css";

function ContactLeft() {
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSend = () => {
    if (message.trim() === "") {
      setErrorMessage("Please enter a message.");
    } else {
      // Simulate sending the message
      setSuccessMessage("Message sent successfully. You'll be notified soon.");
      setMessage(""); // Clear the message input
    }
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
    if (e.target.value.trim() !== "") {
      setErrorMessage(""); // Clear error message when text is entered
    }
  };

  return (
    <>
      <div className="container">
        <ul className="list-group">
          <h4 className="time" >Timing: 12pm to 11pm</h4>
          <textarea
            name=""
            className="suggestion-box list-group-item"
            placeholder="Send us a message..."
            value={message}
            onChange={handleMessageChange}
          ></textarea>
          <button className="send-button" onClick={handleSend}>
            Send
          </button>
          {successMessage && (
            <div className="success-message">{successMessage}</div>
          )}
          {errorMessage && <div className="error-message">{errorMessage}</div>}
        </ul>
      </div>
    </>
  );
}

export default ContactLeft;
