import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userName: String,
  firstName: String,
  lastName: String,
  hash: String,
  accessGroups: [String],
});

export const User = mongoose.model("user", jobSourceSchema);
