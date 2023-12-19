// HoodieMenu.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Hoodie.css';

function HoodieMenu() {
  const [hoodies, setHoodies] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        axios.get("https://web-technologies-delta.vercel.app/api/product/getProduct").then((res) => {
          const data = res.data.product;
          const hoodiesData = data.filter((product) => product.category === 'Hoodies');
        
          // Set the filtered hoodies to state
          setHoodies(hoodiesData);
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Invoke the fetchData function
  }, []); // Empty dependency array ensures that this effect runs only once on mount

  return (
    <div className="Hoodie-menu">
      <h2>Hoodie Menu</h2>
      <ul className="Hoodie-menu-ul">
        {hoodies.map((hoodie) => (
          <li key={hoodie.id} className="Hoodie-menu-li">
            <div className="Hoodie-menu-image">
              <img src={hoodie.image} alt={hoodie.name} className="Hoodie-menu-img" />
            </div>
            <div className="Hoodie-menu-details">
              <h3 className="Hoodie-menu-h3">{hoodie.name}</h3>
              <p className="Hoodie-menu-p">{hoodie.description}</p>
              <p className="Hoodie-menu-price">Price: ${hoodie.price}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HoodieMenu;
