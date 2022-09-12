import express from "express";
import {
  home,
  getUpload,
  postUpload,
  getSearch,
  postSearch,
} from "../controllers/postingController";
const globalRouter = express.Router();

globalRouter.get("/", home);
globalRouter.route("/upload").get(getUpload).post(postUpload);
globalRouter.route("/search").get(getSearch);

export default globalRouter;
