import mongoose from "mongoose";

export const connectMongoDB = async function (connectionURL) {
  const connection = await mongoose.connect(connectionURL);

  return connection;
};
