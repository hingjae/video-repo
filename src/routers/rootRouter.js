import express from "express";
import {
  getUpload,
  home,
  postUpload,
  search,
} from "../controllers/postingController";
import {
  getJoin,
  getLogin,
  postJoin,
  postLogin,
  githubLoginStart,
  GithubLoginFinish,
} from "../controllers/userController";
const rootRouter = express.Router();

rootRouter.get("/", home);
rootRouter.route("/upload").get(getUpload).post(postUpload);
rootRouter.route("/search").get(search);
rootRouter.route("/login").get(getLogin).post(postLogin);
rootRouter.route("/join").get(getJoin).post(postJoin);
rootRouter.route("/login/github/start").get(githubLoginStart);
rootRouter.route("/login/github/finish").get(GithubLoginFinish);
export default rootRouter;
