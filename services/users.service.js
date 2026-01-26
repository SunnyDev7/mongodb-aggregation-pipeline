import { User } from "../models/index.js";

export const findUsers = async () => {
  const users = await User.find().limit(5);

  return users;
};
