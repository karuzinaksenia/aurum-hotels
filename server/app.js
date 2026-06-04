import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import hotelsRouter from "./routes/hotels.js";
import bookingsRouter from "./routes/bookings.js";
import authRouter from "./routes/auth.js";
import favoritesRouter from "./routes/favorites.js";

dotenv.config();

const LOCAL_ORIGIN = "http://localhost:5173";
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN?.trim();

function isAllowedOrigin(origin) {
  if (!origin) return true;
  if (origin === LOCAL_ORIGIN) return true;
  if (CLIENT_ORIGIN && origin === CLIENT_ORIGIN) return true;
  if (/^https:\/\/[\w-]+(?:--[\w-]+)?\.vercel\.app$/.test(origin)) return true;
  return false;
}

async function ensureDb(_req, res, next) {
  try {
    await connectDB();
    next();
  } catch (err) {
    console.error("MongoDB connection failed:", err.message);
    res.status(503).json({ message: "База данных недоступна" });
  }
}

const app = express();

app.use(
  cors({
    origin(origin, callback) {
      if (isAllowedOrigin(origin)) {
        callback(null, true);
      } else {
        callback(null, false);
      }
    },
    credentials: true,
  })
);
app.use(express.json());
app.use(ensureDb);

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

export default app;
