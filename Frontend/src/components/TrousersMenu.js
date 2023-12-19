// TrousersMenu.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './shoes.css';

function TrousersMenu() {
  const [trousers, setTrousers] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        axios.get("https://web-technologies-delta.vercel.app/api/product/getProduct").then((res) => {
          const data = res.data.product;
          const trousersData = data.filter((product) => product.category === 'Trousers');
        
          // Set the filtered trousers to state
          setTrousers(trousersData);
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Invoke the fetchData function
  }, []); // Empty dependency array ensures that this effect runs only once on mount

  return (
    <div className="shoes-menu">
      <h2>Trousers Menu</h2>
      <ul>
        {trousers.map((trouser) => (
          <li key={trouser.id}>
            <div className="shoe-image">
              <img src={trouser.image} alt={trouser.name} />
            </div>
            <div className="shoe-details">
              <h3>{trouser.name}</h3>
              <p>{trouser.description}</p>
              <p className="price">Price: ${trouser.price}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TrousersMenu;
