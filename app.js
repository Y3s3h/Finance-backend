const express = require("express");

const cors = require("cors");
const authRoutes = require("./routes/auth.routes");
const recordRoutes = require("./routes/record.routes");
const dashboardRoutes = require("./routes/dashboard.routes");

const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");

const app = express();

// middleware
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: {
    success: false,
    message: "Too many requests, please try again later",
  },
});
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/records", recordRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use(limiter); // rate limiting middleware
app.use(morgan("dev")); // logging middleware
app.use(helmet()); // security middleware
// test route

app.get("/", (req, res) => {
  res.send("API is running...");
});

module.exports = app;
