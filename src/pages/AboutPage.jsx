import React from "react";
import config from "../config/AppConfig";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function AboutPage() {
  return (
    <div>
      <Navbar />
      <div className="container py-5">

        {/* Header */}
        <header className="text-center mb-5">
          <h1 className="fw-bold display-5">{config.appName}</h1>
          <p className="text-muted lead">
            Trusted healthcare services combining compassion with modern technology.
          </p>
        </header>

        {/* Values */}
        <section className="mb-5">
          <h2 className="fw-bold text-center mb-4">Our Core Values</h2>
          <div className="row g-4">
            {[
              { title: "Compassion", description: "We treat every patient with empathy and respect." },
              { title: "Excellence", description: "We uphold the highest standards in healthcare." },
              { title: "Innovation", description: "We use modern technology to enhance patient care." },
            ].map((value, idx) => (
              <div key={idx} className="col-md-4">
                <div className="p-4 shadow-sm rounded bg-white h-100 text-center">
                  <h5 className="fw-bold mb-2">{value.title}</h5>
                  <p className="text-muted small">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
      <Footer />
    </div>
  );

}
export default AboutPage;