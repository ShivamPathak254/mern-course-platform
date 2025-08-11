// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import HeroSection from "../pages/HeroSection";
// import CourseCard from "../pages/CourseCard";
// import "./Dashboard.css"; // custom styles
// import Footer from "./footer";

// const Dashboard = () => {
//     const navigate = useNavigate();
//     const user = JSON.parse(localStorage.getItem("user"));
//     const [courses, setCourses] = useState([]);

//     useEffect(() => {
//         setCourses([
//             { id: 1, title: "React Masterclass", description: "Master React from scratch", image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
//             { id: 2, title: "Node.js API Bootcamp", description: "Learn Express & APIs", image: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
//             { id: 3, title: "MongoDB Crash Course", description: "Store data like a pro", image: "https://webimages.mongodb.com/_com_assets/cms/mongodb_logo1-76twgcu2dm.png" },
//             { id: 4, title: "JavaScript Essentials", description: "Understand the core concepts", image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" },
//             { id: 5, title: "HTML & CSS Basics", description: "Build stunning websites", image: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" },
//             // { id: 6, title: "Full Stack Bootcamp", description: "Become a MERN stack pro", image: "https://repository-images.githubusercontent.com/588250421/0b36d800-4efb-11ed-89d3-e0b07b74c86d" }
//         ]);
//     }, []);

//     return (
//         <div className="dashboard">
//             <HeroSection user={user} onUploadClick={() => navigate("/upload")} />

//             <section className="container my-5 text-center about-section">
//                 <h2 className="fw-semibold mb-3">About LearnHub</h2>
//                 <p className="text-muted fs-5">
//                     LearnHub is India’s premier online learning platform designed for future developers and tech creators.
//                     We offer project-based courses in full stack development, including technologies like React, Node.js, MongoDB, and more.
//                     Our mission is to bridge the gap between traditional learning and real-world skills by providing industry-relevant content, coding challenges, and interactive modules.
//                     Whether you're a beginner starting with HTML or an advanced learner diving into backend APIs, LearnHub has curated content for every step of your journey.
//                     Instructors can easily upload their own courses and connect with a vibrant learning community.
//                     With LearnHub, learners earn recognized certificates, build portfolios, and prepare for real job opportunities in tech.
//                     Join us and start building your future — one line of code at a time.

//                 </p>
//             </section>

//             <section className="container my-5">
//                 <h2 className="mb-4 text-center fw-bold">🌟 Popular Courses</h2>
//                 <div className="row">
//                     {courses.map((course) => (
//                         <div className="col-md-6 col-lg-4 mb-4" key={course.id}>
//                             <CourseCard course={course} />
//                         </div>
//                     ))}
//                 </div>
//             </section>
//             <Footer></Footer>
            
//         </div>
//     );
// };

// export default Dashboard;


import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import HeroSection from "../pages/HeroSection";
import CourseCard from "../pages/CourseCard";
import Footer from "./footer";
import "./Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch from backend API
    const fetchCourses = async () => {
      try {
        const res = await axios.get("https://mern-course-platform-2.onrender.com/api/courses");

        setCourses(res.data); // assumes API returns an array of courses
      } catch (err) {
        console.error("Error fetching courses:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="dashboard">
      <HeroSection user={user} onUploadClick={() => navigate("/upload")} />

      <section className="container my-5 text-center about-section">
        <h2 className="fw-semibold mb-3">About LearnHub</h2>
        <p className="text-muted fs-5">
          LearnHub is India’s premier online learning platform designed for future developers and tech creators.
          We offer project-based courses in full stack development, including technologies like React, Node.js, MongoDB, and more.
          Whether you're a beginner starting with HTML or an advanced learner diving into backend APIs, LearnHub has curated content for every step of your journey.
          Instructors can easily upload their own courses and connect with a vibrant learning community.
          Join us and start building your future — one line of code at a time.
        </p>
      </section>

      <section className="container my-5">
        <h2 className="mb-4 text-center fw-bold">🌟 Popular Courses</h2>

        {loading ? (
          <p className="text-center text-light">Loading courses...</p>
        ) : (
          <div className="row">
            {courses.map((course) => (
              <div className="col-md-6 col-lg-4 mb-4" key={course._id}>
                <CourseCard course={course} />
              </div>
            ))}
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
};

export default Dashboard;
