// ShortsMenu.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './shoes.css';

function ShortsMenu() {
  const [shorts, setShorts] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        axios.get("https://web-technologies-delta.vercel.app/api/product/getProduct").then((res) => {
          const data = res.data.product;
          const shortsData = data.filter((product) => product.category === 'Shorts');
        
          // Set the filtered shorts to state
          setShorts(shortsData);
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Invoke the fetchData function
  }, []); // Empty dependency array ensures that this effect runs only once on mount

  return (
    <div className="shoes-menu">
      <h2>Shorts Menu</h2>
      <ul>
        {shorts.map((short) => (
          <li key={short.id}>
            <div className="shoe-image">
              <img src={short.image} alt={short.name} />
            </div>
            <div className="shoe-details">
              <h3>{short.name}</h3>
              <p>{short.description}</p>
              <p className="price">Price: ${short.price}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShortsMenu;
