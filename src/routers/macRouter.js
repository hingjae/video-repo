import express from "express";
import {
  macDetail,
  getMacEdit,
  postMacEdit,
} from "../controllers/macController";
const macRouter = express.Router();

macRouter.get("/:id(\\d+)", macDetail);
macRouter.route("/:id(\\d+)/edit").get(getMacEdit).post(postMacEdit);

export default macRouter;
