const express = require("express");
const mongoose = require("mongoose");

const app = express();

const PORT = process.env.PORT || 10000;
const MONGODB_URI = process.env.MONGODB_URI;

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("✅ MongoDB Connected");
  })
  .catch((err) => {
    console.error("❌ MongoDB Connection Error:", err);
  });

app.get("/", (req, res) => {
  res.send("🎉 Lumora Rewards Backend is running and connected!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
