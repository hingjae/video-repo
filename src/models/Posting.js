import mongoose from "mongoose";

const postingSchema = new mongoose.Schema({
  title: String,
  description: String,
  hashtags: [{ type: String, required: true }],
  createdAt: { type: Date, default: new Date() },
});

const Posting = mongoose.model("Posting", postingSchema);

export default Posting;
