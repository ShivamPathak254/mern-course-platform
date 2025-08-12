const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, default: 2999 },
  originalPrice: { type: Number, default: 4999 },
  duration: { type: String, default: "8 weeks" },
  lessons: { type: Number, default: 24 },
  students: { type: Number, default: 0 },
  rating: { type: Number, default: 4.8 },
  instructor: { type: String, default: "Expert Instructor" },
  instructorImage: { type: String, default: "https://via.placeholder.com/60x60" }
});

module.exports = mongoose.model("Course", courseSchema);
