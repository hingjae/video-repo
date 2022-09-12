import Posting from "../models/Posting";

export const home = async (req, res) => {
  try {
    const postings = await Posting.find({}).sort({ createdAt: "asc" });
    return res.render("home", { pageTitle: "Home", postings });
  } catch (error) {
    return res.render("404", { pageTitle: "Fail to access!" });
  }
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
      hashtags: Posting.formatHashtags(hashtags),
    });
    return res.redirect("/");
  } catch (error) {
    return res.render("upload", {
      pageTitle: "Upload",
      errorMessage: error._message,
    });
  }
};

export const enterPosting = async (req, res) => {
  const { id } = req.params;
  const posting = await Posting.findById(id);
  return res.render("posting", { pageTitle: posting.title, posting });
};

export const getEdit = async (req, res) => {
  const { id } = req.params;
  const posting = await Posting.findById(id);
  return res.render("edit", { pageTitle: "Edit", posting });
};
export const postEdit = async (req, res) => {
  const { id } = req.params;
  const { title, contents, hashtags } = req.body;
  await Posting.findByIdAndUpdate(id, {
    title,
    contents,
    hashtags: Posting.formatHashtags(hashtags),
  });
  return res.redirect("/");
};

export const deletePosting = async (req, res) => {
  const { id } = req.params;
  await Posting.findByIdAndDelete(id);
  return res.redirect("/");
};

export const getSearch = async (req, res) => {
  const { keyword } = req.query;
  if (keyword) {
    const postings = await Posting.find({
      title: {
        $regex: new RegExp(keyword, "i"),
      },
    });
    return res.render("search", { pageTitle: "Search", postings });
  }
  return res.render("search", { pageTitle: "Search" });
};
