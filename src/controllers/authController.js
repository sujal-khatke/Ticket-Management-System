import jwt from "jsonwebtoken";
import User from "../models/User.js";

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

export const register = async (req, res) => {
    const { username, email, password, role = "user" } = req.body; // <-- role added with default
    try {
      const user = await User.create({ username, email, password, role }); // <-- pass role
      const token = generateToken(user._id);
      res.status(201).json({ message: "User registered successfully", token, user });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const token = generateToken(user._id);
    res.json({ message: "User login successfully",token, user });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
