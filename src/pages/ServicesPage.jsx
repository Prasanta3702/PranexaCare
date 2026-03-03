import React, { useState } from "react";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

// Demo services data
const servicesData = [
    { id: 1, category: "Dental", name: "Teeth Cleaning" },
    { id: 2, category: "Dental", name: "Cavity Filling" },
    { id: 3, category: "Cardiology", name: "Heart Checkup" },
    { id: 4, category: "Cardiology", name: "ECG Test" },
    { id: 5, category: "General", name: "Annual Checkup" },
    { id: 6, category: "Heart", name: "Blood Pressure Monitoring" },
    { id: 7, category: "Heart", name: "Heart Surgery Consultation" },
    { id: 8, category: "Orthopedics", name: "Bone Density Test" },
    { id: 9, category: "Orthopedics", name: "Joint Pain Treatment" },
    { id: 10, category: "Dermatology", name: "Skin Allergy Test" },
    { id: 11, category: "Dermatology", name: "Acne Treatment" },
    { id: 14, category: "Pediatrics", name: "Child Vaccination" },
    { id: 15, category: "Pediatrics", name: "Growth & Development Checkup" },
];

// Available filter options
const categories = [
    "Dental",
    "Cardiology",
    "Heart",
    "General",
    "Orthopedics",
    "Dermatology",
    "Pediatrics",
];
function ServicesPage() {
    const [selectedCategories, setSelectedCategories] = useState([]);

    // Handle checkbox changes
    const handleCheckboxChange = (category) => {
        setSelectedCategories((prev) => {
            if (prev.includes(category)) {
                return prev.filter((c) => c !== category);
            } else {
                return [...prev, category];
            }
        });
    };

    // Filter services based on selection
    const filteredServices =
        selectedCategories.length === 0
            ? servicesData
            : servicesData.filter((service) =>
                selectedCategories.includes(service.category)
            );

    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row mt-4">

                    {/* Filter Sidebar */}
                    <aside className="col-md-2 mb-4 border-end">
                        <h5 className="fw-bold mb-3">Service Category</h5>
                        <hr />
                        <div className="form-check mb-2">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="all"
                                checked={selectedCategories.length === 0}
                                onChange={() => setSelectedCategories([])}
                            />
                            <label className="form-check-label" htmlFor="all">
                                All
                            </label>
                        </div>
                        {categories.map((cat) => (
                            <div className="form-check mb-2" key={cat}>
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id={cat}
                                    checked={selectedCategories.includes(cat)}
                                    onChange={() => handleCheckboxChange(cat)}
                                />
                                <label className="form-check-label" htmlFor={cat}>
                                    {cat}
                                </label>
                            </div>
                        ))}
                    </aside>

                    {/* Services List */}
                    <div className="col-md-10 border-top">
                        <div className="row g-4 pt-3">
                            {filteredServices.map((service) => (
                                <div className="col-md-4" key={service.id}>
                                    <div className="p-4 border rounded bg-white h-100 d-flex flex-column justify-content-between shadow-sm">
                                        <div>
                                            <h6 className="fw-bold mb-2">{service.name}</h6>
                                            <p className="small text-muted mb-3">{service.category}</p>
                                        </div>
                                        <button className="btn btn-primary btn-sm mt-auto">
                                            Book Appointment
                                        </button>
                                    </div>
                                </div>
                            ))}
                            {filteredServices.length === 0 && (
                                <p className="text-muted">No services available for selected categories.</p>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ServicesPage;