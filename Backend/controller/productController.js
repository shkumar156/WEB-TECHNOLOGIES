const Product = require("../models/productModal/productModal");

exports.productCreate = async (req, res) => {
  const product = await Product.create(req.body);
  res.status(201).json({
    success: true,
    message: "Product Created Successfully",
  });
};

exports.getAllProduct = async (req, res) => {
  const product = await Product.find();
  res.status(201).json({
    success: true,
    product,
  });
};
exports.productUpdate = async (req, res) => {
  const productId = req.params.id; // Assuming the product ID is passed as a URL parameter

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      { $set: req.body },
      { new: true }
    );
    console.log(updatedProduct, "updatedProduct");
    if (!updatedProduct) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Product updated successfully",
      data: updatedProduct,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error updating product",
      error: error.message,
    });
  }
};
exports.productDelete = async (req, res) => {
  const productId = req.params.id; // Assuming the product ID is passed as a URL parameter
  try {
    const deletedProduct = await Product.findByIdAndDelete(productId);

    if (!deletedProduct) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error deleting product",
      error: error.message,
    });
  }
};
