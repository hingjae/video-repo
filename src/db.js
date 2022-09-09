import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/free-board");

const db = mongoose.connection;

db.on("error", (error) => console.log("DB error", error));
db.once("open", () => console.log("Connect to DB"));
