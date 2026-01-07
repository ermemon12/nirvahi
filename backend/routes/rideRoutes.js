const express = require("express");
const Ride = require("../models/Ride");

const router = express.Router();

// CREATE RIDE
router.post("/", async (req, res) => {
  try {
    const ride = new Ride(req.body);
    await ride.save();
    res.status(201).json({ success: true, ride });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// GET ALL RIDES
router.get("/", async (req, res) => {
  const rides = await Ride.find({ status: "ACTIVE" });
  res.json(rides);
});

module.exports = router;
