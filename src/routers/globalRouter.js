import express from "express";
import {
  home,
  getUpload,
  postUpload,
  search,
} from "../controllers/postingController";

const globalRouter = express.Router();

globalRouter.route("/").get(home);
globalRouter.route("/upload").get(getUpload).post(postUpload);
globalRouter.route("/search").get(search);

export default globalRouter;
