import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema(
  {},
  { strict: false, collation: "user" },
);

export const User = mongoose.model("User", userSchema);
