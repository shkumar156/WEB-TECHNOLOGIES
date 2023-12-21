import React, { useState, useEffect } from 'react';
import './rating.css';
import Navbar from './Navbar';
import Footer from './Footer';

function Rating() {
  const [rating, setRating] = useState(0);
  const [ratingSubmitted, setRatingSubmitted] = useState(false);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const submitRating = () => {
    if (rating > 0) {
      setRatingSubmitted(true);
      setTimeout(() => {
        setRatingSubmitted(false);
        // Simulate navigation back to the home page
      //  window.location.href = '/home'; // Replace with the actual URL of your home page
      }, 3000); // Display "Rated Successfully" message for 3 seconds
    } else {
      alert('Please enter your rating.');
    }
  };

  return (
    <>
      <div className="rating">
        <br />
        <br />
        <h2>Rate this Website</h2>
        <br />
        <div className="stars">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={`star ${star <= rating ? 'selected' : ''}`}
              onClick={() => handleRatingChange(star)}
            >
              ★
            </span>
          ))}
        </div>

        <button className="ratingbutton" onClick={submitRating}>
          Submit Rating
        </button>
        <br />
        <br />
        <p>You rated this website: {rating} stars</p>
        {ratingSubmitted && <p className='rated'>Rating submitted successfully!</p>}
        <br />
        <br />
      </div>
      <Footer />
    </>
  );
}

export default Rating;
