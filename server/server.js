import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import hotelsRouter from "./routes/hotels.js";
import bookingsRouter from "./routes/bookings.js";
import authRouter from "./routes/auth.js";
import favoritesRouter from "./routes/favorites.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;
const CLIENT_ORIGIN =
  process.env.CLIENT_ORIGIN || "http://localhost:5173";

app.use(
  cors({
    origin: [CLIENT_ORIGIN, "http://localhost:5173"],
    credentials: true,
  })
);
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", service: "aurum-hotels-api" });
});

app.use("/api/auth", authRouter);
app.use("/api/favorites", favoritesRouter);
app.use("/api/hotels", hotelsRouter);
app.use("/api/bookings", bookingsRouter);

app.use((err, _req, res, next) => {
  if (res.headersSent) return next(err);
  console.error(err);
  const status = err.name === "CastError" ? 404 : 500;
  res.status(status).json({
    message:
      err.name === "CastError" ? "Не найдено" : err.message || "Ошибка сервера",
  });
});

try {
  await connectDB();
} catch (err) {
  console.error("MongoDB connection failed:", err.message);
  process.exit(1);
}

app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
});
