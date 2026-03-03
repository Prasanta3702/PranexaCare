import config from "../config/AppConfig";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-light pt-5 pb-4 mt-5">
      <div className="container">
        <div className="row text-center text-md-start">

          {/* Brand & Description */}
          <div className="col-md-4 mb-4">
            <span className="me-2 fs-1">🏥</span>
            <h5 className="fw-bold fs-3">{config.appName}</h5>
            <p className="small">
              Trusted healthcare services powered by modern medical technology.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4">
            <h6 className="fw-bold">Quick Links</h6>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Doctors
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 mb-4">
            <h6 className="fw-bold">Contact Us</h6>
            <p className="small mb-1">Email: <a href="mailto:info@healthcarepro.com" className="text-light">{config.email}</a></p>
            <p className="small mb-0">Phone: <a href="tel:+1234567890" className="text-light">{config.phone}</a></p>
          </div>

        </div>

        <hr className="bg-light" />

        {/* Footer Bottom */}
        <div className="text-center small">
          © {currentYear} {config.appName}. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;