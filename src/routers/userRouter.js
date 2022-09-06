import express from "express";
import { showUser, getEditUser, postEditUser } from "../controllers/controller";
const userRouter = express.Router();

userRouter.get("/:id(\\d+)", showUser);
userRouter.get("/:id(\\d+)/edit", getEditUser);
userRouter.post("/:id(\\d+)/edit", postEditUser);
userRouter.route("/:id(\\d+)/edit").get(getEditUser).post(postEditUser);

export default userRouter;
