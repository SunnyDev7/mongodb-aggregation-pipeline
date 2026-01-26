import "dotenv/config";
import express from "express";

import { connectMongoDB } from "./connection.js";
import usersRoute from "./routes/users.route.js";

const app = express();
const PORT = process.env.PORT ?? 8000;

connectMongoDB(process.env.MONGODB_URL).then(() =>
  console.log("MongoDB Connected"),
);

app.use(express.json());

app.use("/api", usersRoute);

app.listen(PORT, () => {
  console.log(`Server is up on ${PORT}`);
});
