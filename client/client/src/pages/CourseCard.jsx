
import { useNavigate } from "react-router-dom";
import "./CourseCard.css";
const CourseCard = ({ course }) => {
  const navigate = useNavigate();

  const handleView = () => {
    navigate(`/courses/${course._id}`); // just pass the ID
  };

  return (
    <div className="card h-100">
      <img src={course.image} className="card-img-top" alt={course.title} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{course.title}</h5>
        <p className="card-text">{course.description.slice(0, 100)}...</p>
        <button className="btn btn-primary mt-auto" onClick={handleView}>
          View Course
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
