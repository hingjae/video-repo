import express from "express";
import {
  enterPosting,
  getEditPosting,
  postEditPosting,
} from "../controllers/postingController";

const postingRouter = express.Router();

postingRouter.get("/:id([0-9a-f]{24})", enterPosting);
postingRouter
  .route("/:id([0-9a-f]{24})/edit")
  .get(getEditPosting)
  .post(postEditPosting);

export default postingRouter;
