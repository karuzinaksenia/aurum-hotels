import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    stars: { type: Number, required: true, min: 1, max: 5 },
    rating: { type: Number, required: true, min: 0, max: 5 },
    amenities: [{ type: String }],
    image: { type: String },
  },
  { timestamps: true }
);

export const Hotel = mongoose.model("Hotel", hotelSchema);
