import Posting from "../models/Posting";

export const home = async (req, res) => {
  const postings = await Posting.find({});
  return res.render("home", { pageTitle: "Home", postings });
};

export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload" });
};

export const postUpload = async (req, res) => {
  const { title, description, hashtags } = req.body;
  try {
    await Posting.create({
      title,
      description,
      hashtags: hashtags.split(",").map((word) => `#${word}`),
    });
    return res.redirect("/");
  } catch (error) {
    console.log(error);
    return res.render("upload", {
      pageTitle: "Upload",
      errorMessage: error._message,
    });
  }
};
