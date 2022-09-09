import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter.js";
import macRouter from "./routers/macRouter.js";

const app = express();
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(express.urlencoded({ extended: true }));
app.use(logger);

app.use("/", globalRouter);
app.use("/mac", macRouter);

export default app;
