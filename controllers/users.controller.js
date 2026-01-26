import { User } from "../models/index.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().limit(5);
    res.json({ success: true, data: users });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};