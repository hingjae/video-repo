import User from "../models/User";
import bcrypt from "bcrypt";
import fetch from "node-fetch";

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

export const githubLoginStart = (req, res) => {
  const baseUrl = "https://github.com/login/oauth/authorize?";
  const config = {
    client_id: process.env.GH_CLIENT_ID,
    allow_signup: false,
    scope: "user:email read:user",
  };
  const params = new URLSearchParams(config).toString();
  const url = baseUrl + params;
  return res.redirect(url); // 깃헙 developer setting에서 지정해줬던 콜백 url로감. github
};

export const GithubLoginFinish = async (req, res) => {
  const baseUrl = "https://github.com/login/oauth/access_token?";
  const config = {
    client_id: process.env.GH_CLIENT_ID,
    client_secret: process.env.GH_CLIENT_SECRET,
    code: req.query.code,
  };
  const params = new URLSearchParams(config).toString();
  const url = baseUrl + params;
  const data = await (
    await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
    })
  ).json();
  console.log(data);
  // res.send(JSON.stringify(json));
  if ("access_token" in data) {
    const { access_token } = data;
    const userData = await (
      await fetch("https://api.github.com/user", {
        method: "GET",
        headers: {
          Authorization: `token ${access_token}`, // 이해 안가는 부분 다큐먼트랑 비교했을 때 다름.
        },
      })
    ).json();
    const emailData = await (
      await fetch("https://api.github.com/user/emails", {
        method: "GET",
        headers: {
          Authorization: `token ${access_token}`,
        },
      })
    ).json();
    const email = emailData.find(
      (email) => email.primary === true && email.verified === true
    );
    console.log(email);
  } else {
    return res.redirect("/login");
  }
};
