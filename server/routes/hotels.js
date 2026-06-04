import { Router } from "express";
import mongoose from "mongoose";
import { Hotel, MEAL_PLANS } from "../models/Hotel.js";

const router = Router();

function buildBaseFilter(query = {}) {
  const filter = {};
  if (query.country) filter.country = query.country;
  if (query.meal) filter.mealPlan = query.meal;
  return filter;
}

function buildSearchOptions(countries, cities) {
  const options = [{ value: "", label: "Все", type: "all" }];
  for (const country of countries) {
    options.push({ value: `country:${country}`, label: country, type: "country" });
  }
  for (const city of cities) {
    options.push({ value: `city:${city}`, label: city, type: "city" });
  }
  return options;
}

router.get("/meta", async (req, res, next) => {
  try {
    const baseFilter = buildBaseFilter(req.query);

    const [countries, cities, hotelNames, priceRange, mealPlansInDb] =
      await Promise.all([
      Hotel.distinct("country"),
      Hotel.distinct("city", baseFilter),
      Hotel.distinct("name", baseFilter),
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
      Hotel.distinct("mealPlan", baseFilter),
    ]);

    const sortedCountries = countries.sort();
    const sortedCities = cities.sort();
    const sortedHotelNames = hotelNames.sort();
    const meals = MEAL_PLANS.filter((m) => mealPlansInDb.includes(m));

    res.json({
      countries: sortedCountries,
      cities: sortedCities,
      hotelNames: sortedHotelNames,
      meals,
      searchOptions: buildSearchOptions(sortedCountries, sortedCities),
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
      meal,
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
    if (meal) filter.mealPlan = meal;

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
