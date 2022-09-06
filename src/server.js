import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";

const app = express();
const PORT = 4000;
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");

app.use(logger);
app.use("/", globalRouter);
app.listen(PORT, () =>
  console.log(`Server listening on http://localhost:${PORT}`)
);
