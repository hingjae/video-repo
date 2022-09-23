import express from "express";
import morgan from "morgan";
import session from "express-session";
import rootRouter from "./routers/rootRouter";
import postingRouter from "./routers/postingRouter";
import { localsMiddleware } from "./middlewares";

const app = express();
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: "honey",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(logger);
app.use(localsMiddleware);
app.use("/", rootRouter);
app.use("/posting", postingRouter);

export default app;
