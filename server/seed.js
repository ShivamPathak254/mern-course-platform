const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Course = require("./models/Course");

dotenv.config();

const courses = [
  {
    title: "React Masterclass",
    description: "Master React from scratch and build dynamic UIs",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    price: 2999,
    originalPrice: 4999,
    duration: "6 weeks",
    lessons: 20,
    students: 1500,
    rating: 4.9,
    instructor: "John Doe",
    instructorImage: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    title: "Node.js API Bootcamp",
    description: "Learn backend development with Node.js & Express",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
    price: 2499,
    originalPrice: 3999,
    duration: "5 weeks",
    lessons: 18,
    students: 1200,
    rating: 4.8,
    instructor: "Jane Smith",
    instructorImage: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    title: "MongoDB Crash Course",
    description: "Learn to store and manage data using MongoDB",
    image: "https://webimages.mongodb.com/_com_assets/cms/mongodb_logo1-76twgcu2dm.png",
    price: 1999,
    originalPrice: 3499,
    duration: "4 weeks",
    lessons: 15,
    students: 900,
    rating: 4.7,
    instructor: "Michael Brown",
    instructorImage: "https://randomuser.me/api/portraits/men/45.jpg"
  }
];

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("MongoDB Connected");

    await Course.deleteMany({});
    await Course.insertMany(courses);

    console.log("Courses seeded successfully");
    process.exit();
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
