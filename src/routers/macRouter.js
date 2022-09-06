import express from "express";
import { showMac, getEditMac, postEditMac } from "../controllers/macController";
const macRouter = express.Router();

macRouter.get("/:id(\\d+)", showMac);
macRouter.route("/:id(\\d+)/edit").get(getEditMac).post(postEditMac);

export default macRouter;
