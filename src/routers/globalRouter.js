import express from "express";
import { home, getUpload, postUpload } from "../controllers/macController.js";

const globalRouter = express.Router();

globalRouter.get("/", home);
globalRouter.route("/upload").get(getUpload).post(postUpload);

export default globalRouter;
