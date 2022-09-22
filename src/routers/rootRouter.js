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
} from "../controllers/userController";
const rootRouter = express.Router();

rootRouter.get("/", home);
rootRouter.route("/upload").get(getUpload).post(postUpload);
rootRouter.route("/search").get(search);
rootRouter.route("/login").get(getLogin).post(postLogin);
rootRouter.route("/join").get(getJoin).post(postJoin);

export default rootRouter;
