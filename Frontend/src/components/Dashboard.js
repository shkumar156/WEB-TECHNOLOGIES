import React, { useState } from "react";
import axios from "axios";
import { Toast } from "../Toaster/Toaster";
import './dashboard.css';
import { API } from "../App";

function Dashboard() {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productImage, setProductImage] = useState("");
  const [productCategory, setProductCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: productName,
      description: productDescription,
      price: productPrice,
      image: productImage,
      category: productCategory,
    };

    API
      .post("/api/product/createProduct", data)
      .then((res) => {
        Toast.success(res.data.message);
        setProductName("");
        setProductDescription("");
        setProductPrice("");
        setProductImage("");
        setProductCategory("");
      })
      .catch((err) => {
        Toast.error(err.response.data.message);
      });
  };

  return (
    <div className="product-form-container">
      <h2>Create Product</h2>
      <form onSubmit={handleSubmit}>
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
        <label>
          Product Image URL:
          <input
            type="text"
            value={productImage}
            onChange={(e) => setProductImage(e.target.value)}
          />
        </label>
        <label>
          Product Category:
          <input
            type="text"
            value={productCategory}
            onChange={(e) => setProductCategory(e.target.value)}
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Dashboard;
