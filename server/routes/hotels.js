import { Router } from "express";
import mongoose from "mongoose";
import { Hotel } from "../models/Hotel.js";

const router = Router();

function buildBaseFilter(query = {}) {
  const filter = {};
  if (query.country) filter.country = query.country;
  return filter;
}

router.get("/meta", async (req, res, next) => {
  try {
    const baseFilter = buildBaseFilter(req.query);

    const [countries, cities, priceRange] = await Promise.all([
      Hotel.distinct("country"),
      Hotel.distinct("city", baseFilter),
      Hotel.aggregate([
        { $match: baseFilter },
        {
          $group: {
            _id: null,
            minPrice: { $min: "$price" },
            maxPrice: { $max: "$price" },
          },
        },
      ]),
    ]);

    res.json({
      countries: countries.sort(),
      cities: cities.sort(),
      minPrice: priceRange[0]?.minPrice ?? 0,
      maxPrice: priceRange[0]?.maxPrice ?? 50000,
    });
  } catch (err) {
    next(err);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const {
      city,
      country,
      q,
      minPrice,
      maxPrice,
      minRating,
      stars,
      sortBy = "rating",
      sortOrder = "desc",
    } = req.query;

    const filter = buildBaseFilter({ country });

    if (city) filter.city = new RegExp(city, "i");
    if (q) {
      filter.$or = [
        { name: new RegExp(q, "i") },
        { city: new RegExp(q, "i") },
        { country: new RegExp(q, "i") },
        { description: new RegExp(q, "i") },
      ];
    }

    if (minPrice || maxPrice) {
      filter.price = {};
      if (minPrice) filter.price.$gte = Number(minPrice);
      if (maxPrice) filter.price.$lte = Number(maxPrice);
    }

    if (minRating) filter.rating = { $gte: Number(minRating) };
    if (stars) filter.stars = Number(stars);

    const sortField = ["rating", "price", "stars", "name", "city"].includes(
      sortBy
    )
      ? sortBy
      : "rating";
    const order = sortOrder === "asc" ? 1 : -1;

    const hotels = await Hotel.find(filter).sort({ [sortField]: order });
    res.json(hotels);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(404).json({ message: "Отель не найден" });
    }

    const hotel = await Hotel.findById(req.params.id);

    if (!hotel) {
      return res.status(404).json({ message: "Отель не найден" });
    }
    res.json(hotel);
  } catch (err) {
    next(err);
  }
});

export default router;
