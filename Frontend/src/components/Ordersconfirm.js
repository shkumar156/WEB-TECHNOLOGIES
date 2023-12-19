import React, { useState, useEffect } from 'react';
import '../components/ordersconfirm.css';

const Ordersconfirm = () => {
  const [order, setOrder] = useState({ product: '', quantity: 0 });
  const [isOrderConfirmed, setIsOrderConfirmed] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOrder({ ...order, [name]: value });
  
    setIsOrderConfirmed(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setTimeout(() => {
      setIsOrderConfirmed(true);
      console.log('Order confirmed:', order);
    }, 2000);
  };

  useEffect(() => {
    if (isOrderConfirmed) {
      
      const successMessageTimeout = setTimeout(() => {
        setIsOrderConfirmed(false);
      }, 3000);

      return () => {
        clearTimeout(successMessageTimeout);
      };
    }
  }, [isOrderConfirmed]);

  return (
    <div className="confirm-order-form">
      <h2>Confirm Order</h2>
      {isOrderConfirmed ? (
        <div className="success-message">Order confirmed successfully!</div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="product">Product:</label>
            <input
              type="text"
              id="product"
              name="product"
              value={order.product}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="quantity">Quantity:</label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={order.quantity}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit">Confirm Order</button>
        </form>
      )}
    </div>
  );
};

export default Ordersconfirm;
