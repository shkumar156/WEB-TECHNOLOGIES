import React, { useState, useEffect } from "react";
import "./deleteorders.css";
import axios from "axios";
import { Toast } from "../Toaster/Toaster";


const Deleteorders = () => {
  const [productId, setProductId] = useState("");
const handleSubmit=(e)=>{
  e.preventDefault();

  axios
  .delete(`https://web-technologies-delta.vercel.app/api/product/deleteProduct/${productId}`)
  .then((res) => {
    Toast.success(res.data.message);
    setProductId("");
  })
  .catch((err) => {
    Toast.error(err.response.data.message);
  });
}
  return (
    <div className="delete-order-form">
      <h2>Delete Order</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="orderId">Order ID:</label>
          <input
            type="text"
            id="orderId"
            name="orderId"
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
            required
          />
        </div>
        <button type="submit">Delete Product</button>
      </form>
    </div>
  );
};

export default Deleteorders;
