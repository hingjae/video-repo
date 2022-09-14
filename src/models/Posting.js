import mongoose from "mongoose";

const postingSchema = new mongoose.Schema({
  title: { type: String, required: true, minLength: 1 },
  contents: { type: String, required: true, minLength: 1 },
  hashtags: [{ type: String, trim: true }],
  createdAt: { type: Date, required: true, default: Date.now },
});

postingSchema.static("hashtagsFormat", (hashtags) => {
  return hashtags
    .split(",")
    .map((word) => (word.startsWith("#") ? word.trim() : "#" + word.trim()));
});

const Posting = mongoose.model("Posting", postingSchema);

export default Posting;
