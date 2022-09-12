import express from "express";
import {
  enterPosting,
  getEdit,
  postEdit,
  deletePosting,
} from "../controllers/postingController";
const postingRouter = express.Router();

postingRouter.get("/:id([0-9a-f]{24})", enterPosting);
postingRouter.route("/:id([0-9a-f]{24})/edit").get(getEdit).post(postEdit);
postingRouter.route("/:id([0-9a-f]{24})/delete").get(deletePosting);

export default postingRouter;
