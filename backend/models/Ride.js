const mongoose = require("mongoose");

const rideSchema = new mongoose.Schema(
  {
    from: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      required: true,
    },
    date: {
      type: String, // later you can convert to Date
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    availableSeats: {
      type: Number,
      required: true,
    },
    costPerPerson: {
      type: Number,
      required: true,
    },
    womenOnly: {
      type: Boolean,
      default: false,
    },

    // future-proofing
    createdBy: {
      type: String, // userId later
    },
    status: {
      type: String,
      enum: ["ACTIVE", "FULL", "CANCELLED"],
      default: "ACTIVE",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Ride", rideSchema);
