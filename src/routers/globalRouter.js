import express from "express";
import { home, login, myPage } from "../controllers/globalController";

const globalRouter = express.Router();

globalRouter.get("/", home);
globalRouter.get("/login", login);
globalRouter.get("/mypage", myPage);

export default globalRouter;
