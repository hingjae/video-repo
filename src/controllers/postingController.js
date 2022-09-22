import Posting from "../models/Posting";

export const home = async (req, res) => {
  try {
    const postings = await Posting.find({}).sort({ createdAt: "desc" });
    if (postings.length == 0) {
      return res.render("home", {
        pageTitle: "Home",
        errorMessage: "nothing was posted",
        postings,
      });
    }
    return res.render("home", { pageTitle: "Home", postings });
  } catch (error) {
    return res.render("404", { pageTitle: "404" });
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
      hashtags: Posting.hashtagsFormat(hashtags),
    });
  } catch (error) {
    return res.status(400).render("upload", {
      pageTitle: "Upload",
      errorMessage: error._message,
    });
  }
  return res.redirect("/");
};

export const posting = async (req, res) => {
  const { id } = req.params;
  const posting = await Posting.findById(id);
  return res.render("posting", { pageTitle: posting.title, posting });
};

export const getEdit = async (req, res) => {
  const { id } = req.params;
  const posting = await Posting.findById(id);
  if (!posting) {
    return res.status(404).render("404", { pageTitle: "404" });
  }
  return res.render("editPosting", { pageTitle: "Edit", posting });
};

export const postEdit = async (req, res) => {
  const { id } = req.params;
  const { title, contents, hashtags } = req.body;
  const exists = await Posting.exists({ _id: id });
  if (!exists) {
    return res.status(404).status("404", { pageTitle: "Video not found." });
  }
  await Posting.findByIdAndUpdate(id, {
    title,
    contents,
    hashtags: Posting.hashtagsFormat(hashtags),
  });
  return res.redirect("/");
};

export const deletePosting = async (req, res) => {
  const { id } = req.params;
  const exists = await Posting.exists({ _id: id });
  if (!exists) {
    return res.status(404).render("404", { pageTitle: "404" });
  }
  await Posting.findByIdAndDelete(id);
  return res.redirect("/");
};

export const search = async (req, res) => {
  const { keyword } = req.query;
  const pageTitle = "Search";
  let postings = 0;
  if (keyword) {
    postings = await Posting.find({
      title: {
        $regex: new RegExp(keyword, "i"),
      },
    }).sort({ createdAt: "desc" });
    return res.render("search", { pageTitle, postings });
  }
  return res.render("search", { pageTitle, postings });
};
