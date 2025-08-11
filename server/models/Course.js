const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  price: Number,
  originalPrice: Number,
  duration: String,
  lessons: Number,
  students: Number,
  rating: Number,
  instructor: String,
  instructorImage: String
});

module.exports = mongoose.model("Course", courseSchema);
