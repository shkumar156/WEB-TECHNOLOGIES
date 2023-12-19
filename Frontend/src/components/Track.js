import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import "./track.css";

function Track() {
  const [orderNumber, setOrderNumber] = useState("");
  const [trackMessage, setTrackMessage] = useState(null);

  const handleTrack = () => {
    if (!orderNumber) {
      setTrackMessage("Please enter an order number.");
    } else {
      // Simulate tracking logic here
      setTrackMessage("Order tracked successfully!");
    }
  };

  useEffect(() => {
    if (trackMessage === "Order tracked successfully!") {
      // Reset the message after 3 seconds
      const timer = setTimeout(() => {
        setTrackMessage(null);
      }, 3000);

      // Clear the timer if the component unmounts
      return () => clearTimeout(timer);
    }
  }, [trackMessage]);

  return (
    <>
      <div className="track-container">
        <div className="track-row">
          <div className="track-col">
            <h1 className="track-title">TRACK YOUR ORDER</h1>
            <br />
            <br />
            <br />
            <form className="track-form">
              <label htmlFor="orderNumber" className="track-label">
                <h5>Order Number:</h5>
              </label>
              <input
                type="text"
                id="orderNumber"
                name="orderNumber"
                className="track-input"
                placeholder="Enter your order number or tracking number"
                value={orderNumber}
                onChange={(e) => setOrderNumber(e.target.value)}
              />
              <button type="button" className="track-button" onClick={handleTrack}>
                Track
              </button>
              {trackMessage && <div className="rated">{trackMessage}</div>}
            </form>
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Track;
