import express from "express";

import {
  averageAgeofAllUsers,
  countActiveUsers,
  getAllUsers,
  getTopfiveCommonFruits,
  countNumberofMalesandFemales,
  countryWithHigeshRegistered,
  listAllUniqueEyeColor,
} from "../controllers/users.controller.js";

const router = express.Router();

router.get("/users", getAllUsers);
router.get("/users/aggregate/1", countActiveUsers);
router.get("/users/aggregate/2", averageAgeofAllUsers);
router.get("/users/aggregate/3", getTopfiveCommonFruits);
router.get("/users/aggregate/4", countNumberofMalesandFemales);
router.get("/users/aggregate/5", countryWithHigeshRegistered);
router.get("/users/aggregate/6", listAllUniqueEyeColor);

export default router;
