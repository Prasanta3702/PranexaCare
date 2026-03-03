import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import config from "../config/AppConfig";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm sticky-top">
            <div className="container">
                <Link className="navbar-brand fw-bold" to="/">
                    <span className="me-2">🏥</span>
                    {config.appName}
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">

                    <ul className="navbar-nav align-items-lg-center ms-auto gap-lg-3">

                        <li className="nav-item">
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `nav-link fw-semibold ${isActive ? "text-white border-bottom border-2 border-white" : "text-light"}`
                                }
                            >
                                Home
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    `nav-link fw-semibold ${isActive ? "text-white border-bottom border-2 border-white" : "text-light"}`
                                }
                            >
                                About
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                to="/services"
                                className={({ isActive }) =>
                                    `nav-link fw-semibold ${isActive ? "text-white border-bottom border-2 border-white" : "text-light"}`
                                }
                            >
                                Services
                            </NavLink>
                        </li>

                        <li className="nav-item ms-lg-3">
                            <NavLink
                                to="/appointment"
                                className="btn btn-light text-primary fw-bold px-4 shadow-sm"
                            >
                                Book Appointment
                            </NavLink>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;