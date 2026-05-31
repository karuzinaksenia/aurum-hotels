const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/hotels", (req, res) => {
  res.json([
    {
      id: 1,
      name: "Aurum Resort",
      city: "Paris",
      price: 200,
    },
  ]);
});

app.listen(5000, () => {
  console.log("Server started");
});