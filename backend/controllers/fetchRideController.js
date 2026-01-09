const Ride = require("../models/Ride");

// 🔹 For Dashboard → Recent Rides
const fetchLatestRides = async (req, res) => {
  try {
    const latestRides = await Ride.find()
      .sort({ createdAt: -1 })
      .limit(5);

    res.status(200).json(latestRides);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch recent rides" });
  }
};

// 🔹 For Find Ride Page
const fetchAvailableRides = async (req, res) => {
  try {
    const { source, destination, travelDate } = req.query;

    let filter = {};
    if (source) filter.from = source;
    if (destination) filter.to = destination;
    if (travelDate) filter.date = travelDate;

    const rides = await Ride.find(filter);
    res.status(200).json(rides);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch rides" });
  }
};

module.exports = {
  fetchLatestRides,
  fetchAvailableRides
};
