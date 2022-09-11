import Posting from "../models/Posting";

export const home = async (req, res) => {
  const postings = await Posting.find({});
  return res.render("home", { pageTitle: "Home", postings });
};

export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload" });
};

export const postUpload = async (req, res) => {
  const { title, contents, hashtags } = req.body;
  try {
    await Posting.create({
      title,
      contents,
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

export const enterPosting = async (req, res) => {
  const { id } = req.params;
  try {
    const posting = await Posting.findById(id);
    return res.render("enterPosting", { pageTitle: posting.title, posting });
  } catch (error) {
    return res.render("404", { pageTitle: "Fail to access" });
  }
};

export const getEditPosting = async (req, res) => {
  const { id } = req.params;
  const posting = await Posting.findById(id);
  if (!posting) {
    return res.render("404", { pageTitle: "Fail to access" });
  }
  return res.render("editPosting", { pageTitle: "Edit", posting });
};

export const postEditPosting = async (req, res) => {
  const { title, contents, hashtags } = req.body;
  const { id } = req.params;
  try {
    await Posting.findByIdAndUpdate(id, {
      title,
      contents,
      hashtags: hashtags
        .split(",")
        .map((word) => (word.startsWith("#") ? word : `#${word}`)),
    });
    return res.redirect("/");
  } catch (error) {
    return res.render("404", { pageTitle: "Fail to access." });
  }
};
