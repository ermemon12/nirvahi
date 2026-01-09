const express = require("express");
const router = express.Router();

const {
  fetchLatestRides,
  fetchAvailableRides
} = require("../controllers/rideDisplay.controller");

// Dashboard
router.get("/latest", fetchLatestRides);

// Find Ride
router.get("/search", fetchAvailableRides);

module.exports = router;
