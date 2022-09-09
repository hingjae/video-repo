import "./db";
import "./models/User";
import app from "./server";

const PORT = 4000;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));