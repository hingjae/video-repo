import User from "../models/User";
import bcrypt from "bcrypt";

export const getLogin = (req, res) => {
  return res.render("login", { pageTitle: "Login" });
};

export const postLogin = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  const pageTitle = "Login";
  if (!user) {
    return res.status(400).render("login", {
      pageTitle,
      errorMessage: "Does not exists account",
    });
  }
  const correct = await bcrypt.compare(password, user.password);
  if (!correct) {
    return res.status(400).render("login", {
      pageTitle,
      errorMessage: "Password was not matched.",
    });
  }
  req.session.loggedIn = true;
  req.session.user = user;
  return res.redirect("/");
};

export const getJoin = (req, res) => {
  return res.render("join", { pageTitle: "Join" });
};

export const postJoin = async (req, res) => {
  const { email, password, password2, nickname } = req.body;
  const pageTitle = "Join";
  const emailExists = await User.exists({ email });
  const nicknameExists = await User.exists({ nickname });
  if (emailExists) {
    return res.status(400).render("join", {
      pageTitle,
      errorMessage: "This email is already existed",
    });
  }
  if (password !== password2) {
    return res.status(400).render("join", {
      pageTitle,
      errorMessage: "Confirm password does not match",
    });
  }
  if (nicknameExists) {
    return res.status(400).render("join", {
      pageTitle,
      errorMessage: "This nickname is already existed.",
    });
  }
  try {
    await User.create({
      email,
      password,
      nickname,
    });
  } catch (error) {
    return res
      .status(400)
      .render("login", { pageTitle, errorMessage: error._message });
  }
  return res.redirect("/login");
};
