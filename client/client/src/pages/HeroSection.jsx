const HeroSection = ({ user, onUploadClick }) => (
  <section className="bg-dark text-white py-5 text-center">
    <div className="container">
      <h1 className="display-4 fw-bold">Welcome to EduNova, {user?.name} 🚀</h1>
      <p className="lead">India's Leading Online Learning Platform</p>
      {user?.role === "instructor" && (
        <button
          className="btn btn-warning mt-3 px-4 py-2 fw-bold shadow-sm"
          onClick={onUploadClick}
        >
          Upload New Course
        </button>
      )}
    </div>
  </section>
);

export default HeroSection;
