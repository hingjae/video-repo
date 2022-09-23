import "dotenv/config";
import app from "./server";
import "./db";

const PORT = 4000;

app.listen(PORT, () =>
  console.log(`Server listening on http://localhost:${PORT}`)
);
