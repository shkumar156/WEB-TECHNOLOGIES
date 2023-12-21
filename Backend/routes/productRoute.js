const express = require("express");
const {auth}=require("../middleware/auth")
const {
    productCreate,
    getAllProduct,
    productUpdate,
    productDelete
} = require("../controller/productController");
const router = express.Router();

router.get("/product/getProduct",auth, getAllProduct);
router.post("/product/createProduct",auth, productCreate);
router.put("/product/updateProduct/:id",auth, productUpdate);
router.delete("/product/deleteProduct/:id",auth, productDelete);


// router.post("/users/loginUser", userLogin);
// router.post("/users/loginAdmin", adminLogin);

module.exports = router;
