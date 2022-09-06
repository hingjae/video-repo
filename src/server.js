import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import macRouter from "./routers/macRouter";

const app = express();
const PORT = 4000;
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");

app.use(express.urlencoded({ extended: true }));
app.use(logger);
app.use("/", globalRouter);
app.use("/mac", macRouter);

app.listen(PORT, () =>
  console.log(`Server listening on http://localhost:${PORT}`)
);
