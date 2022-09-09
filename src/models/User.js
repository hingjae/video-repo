import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  job: String,
  license: [{ type: String }],
  meta: {
    phoneNumber: String,
    rating: Number,
  },
});

const User = mongoose.model("User", userSchema);

export default User;
