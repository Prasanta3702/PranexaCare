import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import medicalTeamImage from '../assets/medical-team.png';

function HomePage() {
  return (
    <>
      <Navbar />

      {/* Carousel */}
      {/* <div id="healthCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">

          <div className="carousel-item active">
            <img
              src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3"
              className="d-block w-100"
              alt="Healthcare"
              style={{ height: "500px", objectFit: "cover" }}
            />
            <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-3">
              <h2>Quality Healthcare Services</h2>
              <p>Your health is our top priority.</p>
              <button className="btn btn-primary">Book Appointment</button>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118"
              className="d-block w-100"
              alt="Doctors"
              style={{ height: "500px", objectFit: "cover" }}
            />
            <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-3">
              <h2>Professional Medical Team</h2>
              <p>Experienced and certified specialists.</p>
              <button className="btn btn-primary">Meet Doctors</button>
            </div>
          </div>

        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#healthCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>

        <button className="carousel-control-next" type="button" data-bs-target="#healthCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div> */}

      <div className="hero-section bg-light py-5">
        <div className="container d-flex flex-column flex-md-row align-items-center">
          {/* Text Content */}
          <div className="text-content flex-md-1 mb-4 mb-md-0">
            <h1 className="display-5 fw-bold mb-3">
              Your Health, Our Priority
            </h1>
            <p className="lead text-muted mb-4">
              We provide expert medical care with a personal touch. From preventive check-ups to specialized treatments, our experienced healthcare team is here for you.
            </p>
            <div>
              <button className="btn btn-primary btn-lg me-3">
                Book Appointment
              </button>
            </div>
          </div>

          {/* Cartoon Image */}
          <div className="image-content flex-md-1 text-center">
            <img
              src={medicalTeamImage}
              alt="Healthcare cartoon illustration"
              className="img-fluid"
              style={{ maxHeight: '400px' }}
            />
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold text-primary">Our Services</h2>
          <p className="text-muted">We provide world-class medical services</p>
        </div>

        <div className="row g-4">

          <div className="col-md-4">
            <div className="card shadow-sm border-0 h-100">
              <div className="card-body text-center">
                <h5 className="card-title text-primary">General Checkup</h5>
                <p className="card-text">
                  Comprehensive health examinations and diagnostics.
                </p>
                <button className="btn btn-outline-primary">Learn More</button>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-sm border-0 h-100">
              <div className="card-body text-center">
                <h5 className="card-title text-primary">Emergency Care</h5>
                <p className="card-text">
                  24/7 emergency medical support and ambulance service.
                </p>
                <button className="btn btn-outline-primary">Learn More</button>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-sm border-0 h-100">
              <div className="card-body text-center">
                <h5 className="card-title text-primary">Specialist Doctors</h5>
                <p className="card-text">
                  Expert doctors across multiple specialties.
                </p>
                <button className="btn btn-outline-primary">Learn More</button>
              </div>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}

export default HomePage;