import mongoose from "mongoose";

const postingSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    uppercase: true,
    minLength: 3,
  },
  contents: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    maxLength: 20,
  },
  hashtags: [{ type: String, trim: true }],
  createdAt: { type: Date, required: true, default: new Date() },
});

const Posting = mongoose.model("Posting", postingSchema);

export default Posting;
