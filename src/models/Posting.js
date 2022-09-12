import mongoose from "mongoose";

const postingSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true, minLength: 1 },
  contents: { type: String, required: true, minLength: 1 },
  hashtags: [{ type: String }],
  createdAt: { type: Date, required: true, default: Date.now },
});

postingSchema.static("formatHashtags", function (hashtags) {
  return hashtags
    .split(",")
    .map((word) => (word.startsWith("#") ? word : `#${word}`));
});

const Posting = mongoose.model("Posting", postingSchema);

export default Posting;
