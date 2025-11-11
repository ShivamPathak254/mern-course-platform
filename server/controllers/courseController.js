const Course = require("../models/Course");
const mongoose = require("mongoose");

exports.getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};

// exports.getCourseById = async (req, res) => {
//   try {
//     const course = await Course.findById(req.params.id);
//     if (!course) {
//       return res.status(404).json({ message: "Course not found" });
//     }
//     res.json(course);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server Error" });
//   }
// };


exports.getCourseById = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: "Invalid course ID" });
    }

    const course = await Course.findById(req.params.id);
    if (!course) return res.status(404).json({ message: "Course not found" });

    res.json(course);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};
