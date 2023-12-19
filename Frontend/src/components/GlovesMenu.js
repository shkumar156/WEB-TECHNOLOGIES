// GlovesMenu.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './shoes.css';

function GlovesMenu() {
  const [gloves, setGloves] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        axios.get("https://web-technologies-delta.vercel.app/api/product/getProduct").then((res) => {
          const data = res.data.product;
          const glovesData = data.filter((product) => product.category === 'Gloves');
        
          // Set the filtered gloves to state
          setGloves(glovesData);
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Invoke the fetchData function
  }, []); // Empty dependency array ensures that this effect runs only once on mount

  return (
    <div className="shoes-menu">
      <h2>Gloves Menu</h2>
      <ul>
        {gloves.map((glove) => (
          <li key={glove.id}>
            <div className="shoe-image">
              <img src={glove.image} alt={glove.name} />
            </div>
            <div className="shoe-details">
              <h3>{glove.name}</h3>
              <p>{glove.description}</p>
              <p className="price">Price: ${glove.price}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GlovesMenu;
