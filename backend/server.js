const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const rideRoutes = require("./routes/rideRoutes");               // existing
const rideDisplayRoutes = require("./routes/rideDisplay.routes"); // ✅ NEW

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/rides", rideRoutes);                 // existing
app.use("/api/ride-display", rideDisplayRoutes);   // ✅ NEW

// DB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(5000, () => console.log("Server running on port 5000"));
  })
  .catch((err) => console.error(err));


















  