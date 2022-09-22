import express from "express";
import {
  deletePosting,
  getEdit,
  postEdit,
  posting,
} from "../controllers/postingController";
const postingRouter = express.Router();

postingRouter.route("/:id([0-9a-f]{24})").get(posting);
postingRouter.route("/:id([0-9a-f]{24})/edit").get(getEdit).post(postEdit);
postingRouter.route("/:id([0-9a-f]{24})/delete").get(deletePosting);

export default postingRouter;
