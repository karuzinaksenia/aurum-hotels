import dotenv from "dotenv";
import app from "./app.js";
import { connectDB } from "./config/db.js";

dotenv.config();

const PORT = process.env.PORT || 3001;

try {
  await connectDB();
} catch (err) {
  console.error("MongoDB connection failed:", err.message);
  process.exit(1);
}

app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
});
