import React, { useState, useEffect } from "react";
import "../components/dashboard.css"; // Import your CSS file
import axios from "axios";
import { Toast } from "../Toaster/Toaster";
import { API } from "../App";

function UpdateProduct() {
  const [productId, setProductId] = useState("");
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the form submission here, e.g., sending data to the server
    console.log("Product Name:", productName);
    console.log("Product Description:", productDescription);
    console.log("Product Price:", productPrice);
    const data = {
      name: productName,
      description: productDescription,
      price: productPrice,
    };
    API
      .put(`/api/product/updateProduct/${productId}`, data)
      .then((res) => {
        Toast.success(res.data.message);
        setProductId("");
        setProductName("");
        setProductDescription("");
        setProductPrice("");
      })
      .catch((err) => {
        Toast.error(err.response.data.message);
      });
    // Update state to indicate a successful submission
  };

  return (
    <div className="product-form-container">
      <h2>Update Product Details</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Product Id:
          <input type="text" value={productId} onChange={(e) => setProductId(e.target.value)} />
        </label>
        <label>
          Product Name:
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </label>
        <label>
          Product Description:
          <textarea
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
          ></textarea>
        </label>
        <label>
          Product Price:
          <input
            type="number"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UpdateProduct;
