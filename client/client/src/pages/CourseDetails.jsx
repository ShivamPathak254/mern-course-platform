// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import "./CourseDetails.css";

// const CourseDetails = () => {
//   const { id } = useParams();
//   const [course, setCourse] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [enrolled, setEnrolled] = useState(false);

//   useEffect(() => {
//     const fetchCourse = async () => {
//       try {
//        const res = await axios.get(`https://mern-course-platform-2.onrender.com/api/courses/${id}`)

//        console.log("Fetching from:", `https://mern-course-platform-2.onrender.com/api/courses/${id}`);


//         setCourse(res.data);
//       } catch (err) {
//         console.error("Error fetching course", err);
//         setCourse(null);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCourse();
//   }, [id]);

//   const handleEnroll = () => {
//     setEnrolled(true);
//     // Add your enrollment logic here
//     console.log("Enrolled in course:", course.title);
//   };

//   const handlePreview = () => {
//     // Add your preview logic here
//     console.log("Preview course:", course.title);
//   };

//   if (loading) {
//     return (
//       <div className="course-details-container">
//         <div className="course-details-loading-state">
//           <div className="course-details-loading-spinner"></div>
//           <p>Loading course details...</p>
//         </div>
//       </div>
//     );
//   }

//   if (!course) {
//     return (
//       <div className="course-details-container">
//         <div className="course-details-not-found">
//           <h2>Course not found</h2>
//           <p>The course you're looking for doesn't exist.</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="course-details-container">
//       <div className="course-details-wrapper">
//         {/* Hero Section */}
//         <div className="course-hero">
//           <div className="course-hero-content">
//             <div className="course-badge">Course</div>
//             <h1 className="course-details-title">{course.title}</h1>
//             <p className="course-subtitle">Master the skills you need to succeed</p>
//           </div>
//           <div className="course-details-image-container">
//             <img 
//               src={course.image} 
//               alt={course.title} 
//               className="course-details-image" 
//             />
//           </div>
//         </div>

//         {/* Course Info Grid */}
//         <div className="course-info-grid">
//           {/* Main Content */}
//           <div className="course-main-content">
//             {/* Description Section */}
//             <div className="course-section">
//               <h3 className="section-title">Course Description</h3>
//               <p className="course-details-description">{course.description}</p>
//             </div>

//             {/* What You'll Learn */}
//             <div className="course-section">
//               <h3 className="section-title">What You'll Learn</h3>
//               <ul className="learning-points">
//                 <li>Comprehensive understanding of core concepts</li>
//                 <li>Hands-on practical experience with real projects</li>
//                 <li>Industry best practices and techniques</li>
//                 <li>Problem-solving skills and critical thinking</li>
//                 <li>Certification upon successful completion</li>
//               </ul>
//             </div>

//             {/* Course Features */}
//             <div className="course-section">
//               <h3 className="section-title">Course Features</h3>
//               <div className="features-grid">
//                 <div className="feature-item">
//                   <div className="feature-icon">🎥</div>
//                   <div className="feature-text">
//                     <h4>Video Lectures</h4>
//                     <p>High-quality video content</p>
//                   </div>
//                 </div>
//                 <div className="feature-item">
//                   <div className="feature-icon">📝</div>
//                   <div className="feature-text">
//                     <h4>Assignments</h4>
//                     <p>Practical exercises</p>
//                   </div>
//                 </div>
//                 <div className="feature-item">
//                   <div className="feature-icon">🏆</div>
//                   <div className="feature-text">
//                     <h4>Certificate</h4>
//                     <p>Industry recognized</p>
//                   </div>
//                 </div>
//                 <div className="feature-item">
//                   <div className="feature-icon">👥</div>
//                   <div className="feature-text">
//                     <h4>Community</h4>
//                     <p>Student support group</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Sidebar */}
//           <div className="course-sidebar">
//             {/* Pricing Card */}
//             <div className="pricing-card">
//               <div className="price-section">
//                 <div className="current-price">₹{course.price || '2,999'}</div>
//                 <div className="original-price">₹{course.originalPrice || '4,999'}</div>
//                 <div className="discount-badge">40% OFF</div>
//               </div>
              
//               <div className="course-stats">
//                 <div className="stat-item">
//                   <span className="stat-icon">⏱️</span>
//                   <span className="stat-text">Duration: {course.duration || '8 weeks'}</span>
//                 </div>
//                 <div className="stat-item">
//                   <span className="stat-icon">📚</span>
//                   <span className="stat-text">Lessons: {course.lessons || '24'}</span>
//                 </div>
//                 <div className="stat-item">
//                   <span className="stat-icon">👨‍🎓</span>
//                   <span className="stat-text">Students: {course.students || '1,234'}</span>
//                 </div>
//                 <div className="stat-item">
//                   <span className="stat-icon">⭐</span>
//                   <span className="stat-text">Rating: {course.rating || '4.8'}/5</span>
//                 </div>
//               </div>

//               <div className="course-details-actions">
//                 <button 
//                   className={`course-details-btn course-details-btn-primary ${enrolled ? 'enrolled' : ''}`}
//                   onClick={handleEnroll}
//                   disabled={enrolled}
//                 >
//                   {enrolled ? '✓ Enrolled' : 'Enroll Now'}
//                 </button>
//                 <button 
//                   className="course-details-btn course-details-btn-secondary"
//                   onClick={handlePreview}
//                 >
//                   Preview Course
//                 </button>
//               </div>

//               <div className="guarantee-badge">
//                 <span className="guarantee-icon">🛡️</span>
//                 <span className="guarantee-text">30-day money-back guarantee</span>
//               </div>
//             </div>

//             {/* Instructor Info */}
//             <div className="instructor-card">
//               <h4 className="instructor-title">Instructor</h4>
//               <div className="instructor-info">
//                 <div className="instructor-avatar">
//                   <img src={course.instructorImage || "https://via.placeholder.com/60x60"} alt="Instructor" />
//                 </div>
//                 <div className="instructor-details">
//                   <h5 className="instructor-name">{course.instructor || 'Expert Instructor'}</h5>
//                   <p className="instructor-bio">Experienced professional with 10+ years in the industry</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CourseDetails;

import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./CourseDetails.css";

const CourseDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [enrolled, setEnrolled] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Get token from localStorage
        const token = localStorage.getItem("token");
        
        // If no token, redirect to login
        if (!token) {
          navigate("/login");
          return;
        }

        console.log("Fetching course with ID:", id);
        console.log("API URL:", `https://mern-course-platform-2.onrender.com/api/courses/${id}`);
        
        // Add authorization headers
        const config = {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        };

        const res = await axios.get(
          `https://mern-course-platform-2.onrender.com/api/courses/${id}`,
          config
        );

        console.log("Course data received:", res.data);
        setCourse(res.data);
        
      } catch (err) {
        console.error("Error fetching course:", err);
        console.error("Error details:", {
          message: err.message,
          status: err.response?.status,
          data: err.response?.data
        });
        
        setError(err.response?.data?.message || "Failed to fetch course details");
        
        // If unauthorized, redirect to login
        if (err.response?.status === 401) {
          localStorage.removeItem("token");
          navigate("/login");
        }
      } finally {
        setLoading(false);
      }
    };

    // Only fetch if ID exists
    if (id) {
      fetchCourse();
    } else {
      setLoading(false);
      setError("Invalid course ID");
    }
  }, [id, navigate]);

  const handleEnroll = async () => {
    try {
      const token = localStorage.getItem("token");
      
      if (!token) {
        navigate("/login");
        return;
      }

      // Add your enrollment API call here
      const config = {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      };

      // Example enrollment API call (uncomment when ready)
      // await axios.post(`https://mern-course-platform-2.onrender.com/api/courses/${id}/enroll`, {}, config);
      
      setEnrolled(true);
      console.log("Enrolled in course:", course.title);
    } catch (err) {
      console.error("Enrollment error:", err);
      if (err.response?.status === 401) {
        localStorage.removeItem("token");
        navigate("/login");
      }
    }
  };

  const handlePreview = () => {
    console.log("Preview course:", course?.title);
    // Add your preview logic here
  };

  if (loading) {
    return (
      <div className="course-details-container">
        <div className="course-details-loading-state">
          <div className="course-details-loading-spinner"></div>
          <p>Loading course details...</p>
        </div>
      </div>
    );
  }

  if (error || !course) {
    return (
      <div className="course-details-container">
        <div className="course-details-not-found">
          <h2>Course not found</h2>
          <p>{error || "The course you're looking for doesn't exist."}</p>
          <button 
            className="course-details-btn course-details-btn-primary"
            onClick={() => navigate("/")}
            style={{ marginTop: '20px' }}
          >
            Go Back to Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="course-details-container">
      <div className="course-details-wrapper">
        {/* Hero Section */}
        <div className="course-hero">
          <div className="course-hero-content">
            <div className="course-badge">Course</div>
            <h1 className="course-details-title">{course.title}</h1>
            <p className="course-subtitle">Master the skills you need to succeed</p>
          </div>
          <div className="course-details-image-container">
            <img 
              src={course.image || "https://via.placeholder.com/400x250"} 
              alt={course.title} 
              className="course-details-image"
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/400x250";
              }}
            />
          </div>
        </div>

        {/* Course Info Grid */}
        <div className="course-info-grid">
          {/* Main Content */}
          <div className="course-main-content">
            {/* Description Section */}
            <div className="course-section">
              <h3 className="section-title">Course Description</h3>
              <p className="course-details-description">{course.description}</p>
            </div>

            {/* What You'll Learn */}
            <div className="course-section">
              <h3 className="section-title">What You'll Learn</h3>
              <ul className="learning-points">
                <li>Comprehensive understanding of core concepts</li>
                <li>Hands-on practical experience with real projects</li>
                <li>Industry best practices and techniques</li>
                <li>Problem-solving skills and critical thinking</li>
                <li>Certification upon successful completion</li>
              </ul>
            </div>

            {/* Course Features */}
            <div className="course-section">
              <h3 className="section-title">Course Features</h3>
              <div className="features-grid">
                <div className="feature-item">
                  <div className="feature-icon">🎥</div>
                  <div className="feature-text">
                    <h4>Video Lectures</h4>
                    <p>High-quality video content</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">📝</div>
                  <div className="feature-text">
                    <h4>Assignments</h4>
                    <p>Practical exercises</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">🏆</div>
                  <div className="feature-text">
                    <h4>Certificate</h4>
                    <p>Industry recognized</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">👥</div>
                  <div className="feature-text">
                    <h4>Community</h4>
                    <p>Student support group</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="course-sidebar">
            {/* Pricing Card */}
            <div className="pricing-card">
              <div className="price-section">
                <div className="current-price">₹{course.price || '2,999'}</div>
                <div className="original-price">₹{course.originalPrice || '4,999'}</div>
                <div className="discount-badge">40% OFF</div>
              </div>
              
              <div className="course-stats">
                <div className="stat-item">
                  <span className="stat-icon">⏱️</span>
                  <span className="stat-text">Duration: {course.duration || '8 weeks'}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-icon">📚</span>
                  <span className="stat-text">Lessons: {course.lessons || '24'}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-icon">👨‍🎓</span>
                  <span className="stat-text">Students: {course.students || '1,234'}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-icon">⭐</span>
                  <span className="stat-text">Rating: {course.rating || '4.8'}/5</span>
                </div>
              </div>

              <div className="course-details-actions">
                <button 
                  className={`course-details-btn course-details-btn-primary ${enrolled ? 'enrolled' : ''}`}
                  onClick={handleEnroll}
                  disabled={enrolled}
                >
                  {enrolled ? '✓ Enrolled' : 'Enroll Now'}
                </button>
                <button 
                  className="course-details-btn course-details-btn-secondary"
                  onClick={handlePreview}
                >
                  Preview Course
                </button>
              </div>

              <div className="guarantee-badge">
                <span className="guarantee-icon">🛡️</span>
                <span className="guarantee-text">30-day money-back guarantee</span>
              </div>
            </div>

            {/* Instructor Info */}
            <div className="instructor-card">
              <h4 className="instructor-title">Instructor</h4>
              <div className="instructor-info">
                <div className="instructor-avatar">
                  <img 
                    src={course.instructorImage || "https://via.placeholder.com/60x60"} 
                    alt="Instructor"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/60x60";
                    }}
                  />
                </div>
                <div className="instructor-details">
                  <h5 className="instructor-name">{course.instructor || 'Expert Instructor'}</h5>
                  <p className="instructor-bio">Experienced professional with 10+ years in the industry</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;