import express from "express";
import { home } from "../controllers/controller";

const globalRouter = express.Router();

globalRouter.get("/", home);

export default globalRouter;
