const mongoose = require("mongoose");
const Course = require("./models/Course");

mongoose.connect("mongodb+srv://shivam:ns3L2LmyRyT7%24NG@cluster0.r8taiue.mongodb.net/notesdb?retryWrites=true&w=majority&appName=Cluster0") // Apna DB URL daalo
  .then(() => {
    console.log("MongoDB Connected");
    return Course.insertMany([
      {
        title: "React Masterclass",
        description: "Master React from scratch",
        image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
        price: 2999,
        originalPrice: 4999,
        duration: "8 weeks",
        lessons: 24,
        students: 1234,
        rating: 4.8,
        instructor: "John Doe",
        instructorImage: "https://via.placeholder.com/60x60"
      },
      {
        title: "Node.js API Bootcamp",
        description: "Learn Express & APIs",
        image: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
        price: 2999,
        originalPrice: 4999,
        duration: "6 weeks",
        lessons: 18,
        students: 980,
        rating: 4.7,
        instructor: "Jane Smith",
        instructorImage: "https://via.placeholder.com/60x60"
      }
    ]);
  })
  .then(() => {
    console.log("Courses added");
    mongoose.connection.close();
  })
  .catch(err => console.error(err));
