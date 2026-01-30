import express from "express";

import {
  averageAgeofAllUsers,
  countActiveUsers,
  getAllUsers,
  getTopfiveCommonFruits,
  countNumberofMalesandFemales,
  countryWithHigeshRegistered,
  listAllUniqueEyeColor,
  averageTagsPerUser,
  enimTagPerUser,
  velitTagPerInactiveUser,
  userWithPhNoPlusOne,
  recentlyRegisteredUser,
} from "../controllers/users.controller.js";

const router = express.Router();

router.get("/users", getAllUsers);
router.get("/users/aggregate/1", countActiveUsers);
router.get("/users/aggregate/2", averageAgeofAllUsers);
router.get("/users/aggregate/3", getTopfiveCommonFruits);
router.get("/users/aggregate/4", countNumberofMalesandFemales);
router.get("/users/aggregate/5", countryWithHigeshRegistered);
router.get("/users/aggregate/6", listAllUniqueEyeColor);
router.get("/users/aggregate/7", averageTagsPerUser);
router.get("/users/aggregate/8", enimTagPerUser);
router.get("/users/aggregate/9", velitTagPerInactiveUser);
router.get("/users/aggregate/10", userWithPhNoPlusOne);
router.get("/users/aggregate/11", recentlyRegisteredUser);

export default router;
