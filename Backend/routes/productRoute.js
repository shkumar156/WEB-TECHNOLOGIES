const express = require("express");
const {
    productCreate,
    getAllProduct,
    productUpdate,
    productDelete
} = require("../controller/productController");
const router = express.Router();

router.get("/product/getProduct", getAllProduct);
router.post("/product/createProduct", productCreate);
router.put("/product/updateProduct/:id", productUpdate);
router.delete("/product/deleteProduct/:id", productDelete);


// router.post("/users/loginUser", userLogin);
// router.post("/users/loginAdmin", adminLogin);

module.exports = router;
