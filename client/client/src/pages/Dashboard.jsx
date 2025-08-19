
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import HeroSection from "../pages/HeroSection";
import CourseCard from "../pages/CourseCard";
import Footer from "./Footer";
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
        <h2 className="fw-semibold mb-3">About EduNova</h2>
        <p className="text-muted fs-5">
         EduNova is India’s premier online learning platform, designed for aspiring developers and future tech innovators.
Our mission is simple yet powerful — to bridge the gap between learning and real-world application by providing courses that are practical, hands-on, and industry-relevant.

We specialize in project-based learning, offering a wide range of Full Stack Development courses that cover cutting-edge technologies like React, Node.js, MongoDB, Express, and more. Each course is carefully crafted to help learners build real projects, gain confidence, and strengthen their portfolios.

Whether you are a beginner taking your first steps with HTML and CSS, or an advanced learner diving deep into APIs, authentication, and database design, EduNova provides curated content tailored to every stage of your journey.



 With EduNova, you don’t just learn — you build, you grow, and you innovate. Join us today and start creating your future, one line of code at a time.</p>
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
