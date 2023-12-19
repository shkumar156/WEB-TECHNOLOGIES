// DressMenu.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './dress.css';

function DressMenu() {
  const [dresses, setDresses] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        axios.get("http://localhost:8080/api/product/getProduct").then((res) => {
          const data = res.data.product;
          const dressesData = data.filter((product) => product.category === 'Women Dress');
        
          // Set the filtered dresses to state
          setDresses(dressesData);
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Invoke the fetchData function
  }, []); // Empty dependency array ensures that this effect runs only once on mount

  return (
    <div className="Dress-menu">
      <h2>Dress Menu</h2>
      <ul className="Dress-menu-ul">
        {dresses.map((dress) => (
          <li key={dress.id} className="Dress-menu-li">
            <div className="Dress-menu-image">
              <img src={dress.image} alt={dress.name} className="Dress-menu-img" />
            </div>
            <div className="Dress-menu-details">
              <h3 className="Dress-menu-h3">{dress.name}</h3>
              <p className="Dress-menu-p">{dress.description}</p>
              <p className="Dress-menu-price">Price: ${dress.price}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DressMenu;
