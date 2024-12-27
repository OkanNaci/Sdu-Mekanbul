const mongoose = require("mongoose");

// Cloud MongoDB URI
const dbURI = "mongodb+srv://sinan:sinan@cluster0.4or9sis.mongodb.net/mekanbul";

// Connect to MongoDB
mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Log successful connection
mongoose.connection.on("connected", () => {
  console.log("MongoDB connected at:", dbURI);
});

// Log disconnection
mongoose.connection.on("disconnected", () => {
  console.log("MongoDB connection disconnected");
});

// Log connection errors
mongoose.connection.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

// Graceful shutdown on app termination
process.on("SIGINT", () => {
  mongoose.connection.close(() => {
    console.log("MongoDB connection closed due to app termination");
    process.exit(0);
  });
});

process.on("SIGTERM", () => {
  mongoose.connection.close(() => {
    console.log("MongoDB connection closed due to SIGTERM");
    process.exit(0);
  });
});

// Require Mongoose models
require("./venue");
