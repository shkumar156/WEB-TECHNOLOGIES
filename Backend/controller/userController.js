const User = require("../models/authModals/userModal");
const Admin = require("../models/authModals/adminModal");
const  bcrypt= require ("bcrypt");
const  jwt= require ("jsonwebtoken");

exports.userRegister = async (req, res) => {
  console.log(req.body, "req.body;");
  const { name, email, gender, password } = req.body;
  console.log(req.body, "data");
  const user = await User.findOne({ email });
  if (user) {
    return res.status(401).json({
      success: false,
      message: "This user already exist",
    });
  }
  const hashedPassword = await bcrypt.hash(password, 12);
  const userData = await User.create({
    name,
    email,
    gender,
    password:hashedPassword,
  });
  const token = jwt.sign(
    { email: userData.email, id: userData._id },
    "apex",
    { expiresIn: "1h" }
  );
  res.status(201).json({
    success: true,
    message: "Registered Successfully",
    user: {
      _id: userData._id,
      name: userData.name,
      email: userData.email,
      gender: userData.gender,
      createdAt: userData.createdAt,
    },
    token:token
  });


};

exports.userLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ email });
    console.log(user, "user");
    // Check if user exists
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }
    const isPasswordCorrect = await bcrypt.compare(
      password,
      user.password
    );
    if (!isPasswordCorrect) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }
    const token = jwt.sign(
      { email: user.email, id: user._id },
      "apex",
      { expiresIn: "1h" }
    );

    // If authentication is successful, return user data
    res.status(200).json({
      success: true,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        gender: user.gender,
        createdAt: user.createdAt,
      },
      message: "Login successful",
      token:token
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
exports.adminLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    if (password !== admin?.password) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }
    res.status(200).json({
      success: true,
      admin: {
        _id: admin._id,
        email: admin.email,
      },
      message: "Login successful",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
