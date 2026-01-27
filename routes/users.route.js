import express from "express";

import {
  averageAgeofAllUsers,
  countActiveUsers,
  getAllUsers,
  getTopfiveCommonFruits,
} from "../controllers/users.controller.js";

const router = express.Router();

router.get("/users", getAllUsers);
router.get("/users/aggregate/1", countActiveUsers);
router.get("/users/aggregate/2", averageAgeofAllUsers);
router.get("/users/aggregate/3", getTopfiveCommonFruits);

export default router;
