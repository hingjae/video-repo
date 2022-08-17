import express from "express";
import morgan from "morgan";

const app = express();
const PORT = 4000;
const logger = morgan("dev");

const globalRouter = express.Router();
const userRouter = express.Router();
const videoRouter = express.Router();

const privateMiddle = (req, res, next) => {
  const url = req.url;
  if (url === "/user/edit" || url === "/user/edit/") {
    return res.send("not Allowed");
  }
  next();
};

const handleHome = (req, res) => {
  return res.send("Home");
};

globalRouter.get("/", handleHome);

const handleMypage = (req, res) => {
  return res.send("handleMypage");
};

userRouter.get("/edit", handleMypage);

const handleWatch = (req, res) => {
  return res.send("watch");
};

videoRouter.get("/watch", handleWatch);

app.use(logger, privateMiddle);
app.use("/", globalRouter);
app.use("/user", userRouter);
app.use("/video", videoRouter);

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
