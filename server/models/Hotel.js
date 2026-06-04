import mongoose from "mongoose";

export const MEAL_PLANS = [
  "Завтрак",
  "Полупансион",
  "All inclusive",
  "Без питания",
];

const hotelSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true, trim: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    stars: { type: Number, required: true, min: 1, max: 5 },
    rating: { type: Number, required: true, min: 0, max: 5 },
    amenities: [{ type: String }],
    mealPlan: {
      type: String,
      required: true,
      enum: MEAL_PLANS,
    },
    image: { type: String },
  },
  { timestamps: true }
);

export const Hotel = mongoose.model("Hotel", hotelSchema);
