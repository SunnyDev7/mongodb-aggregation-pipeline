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

//Question find the total number of males and females

export const countNumberofMalesandFemales = async (req, res) => {
  try {
    const result = await User.aggregate([
      {
        $group: {
          _id: "$gender",
          count: {
            $sum: 1,
          },
        },
      },
    ]);

    res.json({ success: true, data: result });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

//Question: which country has the highest number of registered users

export const countryWithHigeshRegistered = async (req, res) => {
  try {
    const result = await User.aggregate([
      {
        $group: {
          _id: "$company.location.country",
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
        $limit: 2,
      },
    ]);

    res.json({ success: true, data: result });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

//Question: List all unique eye colors present in the collection

export const listAllUniqueEyeColor = async (req, res) => {
  try {
    const result = await User.aggregate([
      {
        $group: {
          _id: "$eyeColor",
        },
      },
    ]);

    res.json({ success: true, data: result });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

//Question: What is the average number of tags per user?

export const averageTagsPerUser = async (req, res) => {
  try {
    const result = await User.aggregate([
      {
        $unwind: {
          path: "$tags",
        },
      },
      {
        $group: {
          _id: "$_id",
          numberOdTags: {
            $sum: 1 
          } 
        }
      },
      {
        $group: {
          _id: null,
          average: {
            $avg: "$numberOdTags"
          }
        }
      }
    ]);

    res.json({ success: true, data: result });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
