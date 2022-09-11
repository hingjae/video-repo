import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import postingRouter from "./routers/postingRouter";
const app = express();
const devMiddleware = morgan("dev");

app.use(devMiddleware);
app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(express.urlencoded({ extended: true }));
app.use("/", globalRouter);
app.use("/posting", postingRouter);

export default app;
