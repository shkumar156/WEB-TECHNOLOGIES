import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './shoes.css';
import { API } from '../App';

function ShoesMenu() {
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
    
        API.get("/api/product/getProduct").then((res) => {
          const data=res.data.product;
          const shoesData = data.filter((product) => product.category === 'Shoes');
        
          // Set the filtered shirts to state
          setShoes(shoesData);
        });
        // Filter products for the "Shirts" category
     
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Invoke the fetchData function
  }, []); // Empty dependency array ensures that this effect runs only once on mount

  return (
    <div className="shoes-menu">
      <h2>Shoes Menu</h2>
      <ul>
        {shoes.map((shoe) => (
          <li key={shoe.id}>
            <div className="shoe-image">
              <img src={shoe.image} alt={shoe.name} />
            </div>
            <div className="shoe-details">
              <h3>{shoe.name}</h3>
              <p>{shoe.description}</p>
              <p className="price">Price: ${shoe.price}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoesMenu;
