// SunglassesMenu.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './shoes.css';

function SunglassesMenu() {
  const [sunglasses, setSunglasses] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        axios.get("http://localhost:8080/api/product/getProduct").then((res) => {
          const data = res.data.product;
          const sunglassesData = data.filter((product) => product.category === 'Sunglasses');
        
          // Set the filtered sunglasses to state
          setSunglasses(sunglassesData);
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Invoke the fetchData function
  }, []); // Empty dependency array ensures that this effect runs only once on mount

  return (
    <div className="shoes-menu">
      <h2>Sunglasses Menu</h2>
      <ul>
        {sunglasses.map((sunglass) => (
          <li key={sunglass.id}>
            <div className="shoe-image">
              <img src={sunglass.image} alt={sunglass.name} />
            </div>
            <div className="shoe-details">
              <h3>{sunglass.name}</h3>
              <p>{sunglass.description}</p>
              <p className="price">Price: ${sunglass.price}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SunglassesMenu;
