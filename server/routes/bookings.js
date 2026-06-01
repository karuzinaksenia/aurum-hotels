import { Router } from "express";
import mongoose from "mongoose";
import { Booking } from "../models/Booking.js";
import { Hotel } from "../models/Hotel.js";
import { authRequired } from "../middleware/auth.js";

const router = Router();

router.use(authRequired);

router.get("/", async (req, res, next) => {
  try {
    const bookings = await Booking.find({ userId: req.user.id }).sort({
      createdAt: -1,
    });
    res.json(bookings);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { hotelId, guestName, email, checkIn, checkOut, guests } = req.body;

    if (!hotelId || !guestName || !email || !checkIn || !checkOut || !guests) {
      return res.status(400).json({ message: "Заполните все поля" });
    }

    if (!mongoose.isValidObjectId(hotelId)) {
      return res.status(404).json({ message: "Отель не найден" });
    }

    const hotel = await Hotel.findById(hotelId);
    if (!hotel) {
      return res.status(404).json({ message: "Отель не найден" });
    }

    const start = new Date(checkIn);
    const end = new Date(checkOut);
    if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime())) {
      return res.status(400).json({ message: "Некорректные даты" });
    }
    if (end <= start) {
      return res
        .status(400)
        .json({ message: "Дата выезда должна быть позже заезда" });
    }

    const nights = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
    const totalPrice = nights * hotel.price * Number(guests);

    const booking = await Booking.create({
      userId: req.user.id,
      hotelId: hotel._id,
      hotelName: hotel.name,
      guestName,
      email,
      checkIn: start,
      checkOut: end,
      guests: Number(guests),
      totalPrice,
    });

    res.status(201).json(booking);
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(404).json({ message: "Бронь не найдена" });
    }

    const booking = await Booking.findOneAndDelete({
      _id: req.params.id,
      userId: req.user.id,
    });

    if (!booking) {
      return res.status(404).json({ message: "Бронь не найдена" });
    }
    res.json({ message: "Бронь отменена" });
  } catch (err) {
    next(err);
  }
});

export default router;
