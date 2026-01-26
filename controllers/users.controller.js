import { findUsers } from "../services/users.service.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await findUsers();
    res.json({ success: true, count: users.length, data: users });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
