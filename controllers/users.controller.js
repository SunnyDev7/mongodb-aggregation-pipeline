import { User } from "../models/index.js";
import { findUsers } from "../services/users.service.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await findUsers();
    res.json({ success: true, count: users.length, data: users });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

//Question: How many users are active?

export const countActiveUsers = async (req, res) => {
  try {
    const result = await User.aggregate([
      {
        $match: {
          isActive: true,
        },
      },
      {
        $count: "activeUsers",
      },
    ]);

    res.json({ success: true, data: result });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

//Question: What is average age of all users?

export const averageAgeofAllUsers = async (req, res) => {
  try {
    const result = await User.aggregate([
      {
        $group: {
          _id: null,
          averageAge: {
            $avg: "$age",
          },
        },
      },
    ]);

    res.json({ success: true, data: result });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

//Question: List the top 5 most common fruits among users
//Note: the document in the DB has only 3 categories of fruits, hence it give a result og only 3 categories

export const getTopfiveCommonFruits = async (req, res) => {
  try {
    const result = await User.aggregate([
      {
        $group: {
          _id: "$favoriteFruit",
          count: {
            $sum: 1,
          },
        },
      },
      {
        $sort: {
          count: -1,
        },
      },
      {
        $limit: 5,
      },
    ]);

    res.json({ success: true, data: result });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
