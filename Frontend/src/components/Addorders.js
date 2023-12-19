import React, { useState, useEffect } from 'react';
import './addorders.css';

const AddOrders = () => {
  const [order, setOrder] = useState({ product: '', quantity: 0 });
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOrder({ ...order, [name]: value });
  };

  const handleIncreaseQuantity = () => {
    setOrder({ ...order, quantity: order.quantity + 1 });
  };

  const handleDecreaseQuantity = () => {
    if (order.quantity > 0) {
      setOrder({ ...order, quantity: order.quantity - 1 });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setTimeout(() => {
      console.log('Form submitted:', order);
      setSubmitSuccess(true);
    }, 2000);
  };

  useEffect(() => {
    if (submitSuccess) {
      const resetSuccessMessage = setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000);

      return () => {
        clearTimeout(resetSuccessMessage);
      };
    }
  }, [submitSuccess]);

  return (
    <div className="add-order-form">
      <h2>Add Order</h2>
      {submitSuccess ? (
        <p className="success-message">Order submitted successfully!</p>
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
            <div className="quantity-controls">
              <button type="button" onClick={handleDecreaseQuantity}>-</button>
              <span>{order.quantity}</span>
              <button type="button" onClick={handleIncreaseQuantity}>+</button>
            </div>
          </div>
          <button type="submit">Add Order</button>
        </form>
      )}
    </div>
  );
};

export default AddOrders;
