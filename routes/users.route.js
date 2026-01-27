import express from "express";

import {
  averageAgeofAllUsers,
  countActiveUsers,
  getAllUsers,
} from "../controllers/users.controller.js";

const router = express.Router();

router.get("/users", getAllUsers);
router.get("/users/aggregate/1", countActiveUsers);
router.get("/users/aggregate/2", averageAgeofAllUsers);

export default router;
