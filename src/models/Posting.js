import mongoose from "mongoose";

const postingSchema = new mongoose.Schema({
  title: { type: String, required: true },
  contents: { type: String, required: true },
  hashtags: [{ type: String, trim: true }],
  createdAt: { type: Date, required: true, default: Date.now },
});

postingSchema.static("hashtagsFormat", function (hashtags) {
  return hashtags
    .split(",")
    .map((word) => (word.startsWith("#") ? word : `#${word}`));
});

const Posting = mongoose.model("Posting", postingSchema);

export default Posting;
