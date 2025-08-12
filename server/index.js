const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// -----------------------
// MongoDB Connection
// -----------------------
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Atlas connected"))
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1);
  });

// -----------------------
// Middleware
// -----------------------
app.use(
  cors({
    origin: "*", // Deployment ke baad apne frontend ka URL yahan dalna (e.g., "https://myfrontend.netlify.app")
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

// -----------------------
// Routes
// -----------------------
app.use("/api/auth", require("./routes/auth.route"));
app.use("/api/courses", require("./routes/courseRoutes"));

// Default Route (for testing)
app.get("/", (req, res) => {
  res.send("🚀 API is running...");
});

// -----------------------
// Server Start
// -----------------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
