import express from "express";
import {
  home,
  getUpload,
  postUpload,
  search,
} from "../controllers/postingController";
import {
  getJoin,
  postJoin,
  getLogin,
  postLogin,
} from "../controllers/userController";

const globalRouter = express.Router();

globalRouter.route("/").get(home);
globalRouter.route("/upload").get(getUpload).post(postUpload);
globalRouter.route("/search").get(search);
globalRouter.route("/join").get(getJoin).post(postJoin);
globalRouter.route("/login").get(getLogin).post(postLogin);

export default globalRouter;
