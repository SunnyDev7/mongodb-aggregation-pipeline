import express from "express";

import { countActiveUsers, getAllUsers, } from "../controllers/users.controller.js";

const router = express.Router();

router.get("/users", getAllUsers);
router.get("/users/aggregate", countActiveUsers);

export default router;
