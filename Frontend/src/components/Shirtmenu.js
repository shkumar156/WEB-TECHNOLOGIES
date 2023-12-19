// import React from 'react';
// import './Shirtmenu.css';

// function ShirtMenu() {
//         const shirts = [
//                 {
//                   id: 1,
//                   name: '  Shirts',
//                   description: 'A timeless shirt for any occasion.',
//                   price: 29.99,
//                   image: require("../Shirts/1.webp"), // Add the image filename or URL
//                 },
//               {
//                 id: 2,
//                 name: '  Shirts',
//                 description: 'A comfortable and stylish striped shirt.',
//                 price: 39.99,
//                 image: require("../Shirts/2.webp"),
//                 },
//                 {
//                         id: 1,
//                         name: '  Shirts',
//                         description: 'A timeless shirt for any occasion.',
//                         price: 29.99,
//                         image: require("../Shirts/3.webp"), // Add the image filename or URL
//                       },
//                     {
//                       id: 2,
//                       name: '  Shirts',
//                       description: 'A comfortable and stylish striped shirt.',
//                       price: 39.99,
//                       image: require("../Shirts/4.webp"),
//                       },
//                       {
//                         id: 1,
//                         name: '  Shirts',
//                         description: 'A timeless shirt for any occasion.',
//                         price: 29.99,
//                         image: require("../Shirts/5.webp"), // Add the image filename or URL
//                       },
//                     {
//                       id: 2,
//                       name: ' Striped Shirt',
//                       description: 'A comfortable and stylish striped shirt.',
//                       price: 39.99,
//                       image: require("../Shirts/6.webp"),
//                       },
//                       {
//                         id: 1,
//                         name: '  Shirts',
//                         description: 'A timeless shirt for any occasion.',
//                         price: 29.99,
//                         image: require("../Shirts/7.webp"), // Add the image filename or URL
//                       },
//                     {
//                       id: 2,
//                       name: '  Shirts',
//                       description: 'A comfortable and stylish striped shirt.',
//                       price: 39.99,
//                       image: require("../Shirts/8.webp"),
//                       },
//                       {
//                         id: 1,
//                         name: '  Shirts',
//                         description: 'A timeless shirt for any occasion.',
//                         price: 29.99,
//                         image: require("../Shirts/9.webp"), // Add the image filename or URL
//                       },
//                     {
//                       id: 2,
//                       name: '  Shirts',
//                       description: 'A comfortable and stylish striped shirt.',
//                       price: 39.99,
//                       image: require("../Shirts/10.webp"),
//                       },
//                       {
//                         id: 1,
//                         name: '  Shirts',
//                         description: 'A timeless shirt for any occasion.',
//                         price: 29.99,
//                         image: require("../Shirts/11.webp"), // Add the image filename or URL
//                       },
//                     {
//                       id: 2,
//                       name: '  Shirts',
//                       description: 'A comfortable and stylish striped shirt.',
//                       price: 39.99,
//                       image: require("../Shirts/12.webp"),
//                       },
//                       {
//                         id: 1,
//                         name: '  Shirts',
//                         description: 'A timeless shirt for any occasion.',
//                         price: 29.99,
//                         image: require("../Shirts/13.webp"), // Add the image filename or URL
//                       },
//                     {
//                       id: 2,
//                       name: '  Shirts',
//                       description: 'A comfortable and stylish striped shirt.',
//                       price: 39.99,
//                       image: require("../Shirts/14.webp"),
//                       },
//                       {
//                         id: 1,
//                         name: '  Shirts',
//                         description: 'A timeless shirt for any occasion.',
//                         price: 29.99,
//                         image: require("../Shirts/15.webp"), // Add the image filename or URL
//                       },
                    
//               ];

//   return (
//     <div className="shirt-menu">
//       <h2>Shirt Menu</h2>
//       <ul>
//         {shirts.map((shirt) => (
//           <li key={shirt.id}>
//             <div className="shirt-image">
//               <img src={shirt.image} alt={shirt.name} />
//             </div>
//             <div className="shirt-details">
//               <h3>{shirt.name}</h3>
//               <p>{shirt.description}</p>
//               <p className="price">Price: ${shirt.price.toFixed(2)}</p>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default ShirtMenu;




import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Shirtmenu.css'

function ShirtMenu() {
  const [shirts, setShirts] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
    
        axios.get("https://web-technologies-delta.vercel.app/api/product/getProduct").then((res) => {
          const data=res.data.product;
          const shirtsData = data.filter((product) => product.category === 'Shirts');
        
          // Set the filtered shirts to state
          setShirts(shirtsData);
        });
        // Filter products for the "Shirts" category
     
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Invoke the fetchData function
  }, []); // Empty dependency array ensures that this effect runs only once on mount

  return (
    <div className="shirt-menu">
      <h2>Shirt Menu</h2>
      <ul>
        {shirts.map((shirt) => (
          <li key={shirt.id}>
            <div className="shirt-image">
              <img src={shirt.image} alt={shirt.name} />
            </div>
            <div className="shirt-details">
              <h3>{shirt.name}</h3>
              <p>{shirt.description}</p>
              <p className="price">Price: ${shirt.price}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShirtMenu;
