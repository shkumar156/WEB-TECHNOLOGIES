const express = require("express");
const {
  userRegister,
  userLogin,
  adminLogin,
} = require("../controller/userController.js");
const router = express.Router();

router.post("/users/createUser", userRegister);
router.post("/users/loginUser", userLogin);
router.post("/users/loginAdmin", adminLogin);

module.exports = router;
