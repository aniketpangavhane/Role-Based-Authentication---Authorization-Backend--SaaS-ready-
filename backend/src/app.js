const express = require = "express";
const router = require("./routes/authRoutes");
const app = express();


app.use(express.json());

app.use("api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("API is running");
});

module.exports = app;