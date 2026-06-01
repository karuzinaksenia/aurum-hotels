import { Router } from "express";
import mongoose from "mongoose";
import { User } from "../models/User.js";
import { authRequired } from "../middleware/auth.js";

const router = Router();

router.use(authRequired);

router.get("/", async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id).populate("favorites");
    res.json(user?.favorites || []);
  } catch (err) {
    next(err);
  }
});

router.post("/:hotelId", async (req, res, next) => {
  try {
    if (!mongoose.isValidObjectId(req.params.hotelId)) {
      return res.status(404).json({ message: "Отель не найден" });
    }

    const user = await User.findByIdAndUpdate(
      req.user.id,
      { $addToSet: { favorites: req.params.hotelId } },
      { new: true }
    ).populate("favorites");

    res.json(user.favorites);
  } catch (err) {
    next(err);
  }
});

router.delete("/:hotelId", async (req, res, next) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.user.id,
      { $pull: { favorites: req.params.hotelId } },
      { new: true }
    ).populate("favorites");

    res.json(user?.favorites || []);
  } catch (err) {
    next(err);
  }
});

export default router;
