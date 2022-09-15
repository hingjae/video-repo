import "./db";
// import "./models/Posting"
// import "./models/User"
import app from "./server";

const PORT = 4000;

app.listen(PORT, () =>
  console.log(`Server listening on http://localhost:${PORT}`)
);
