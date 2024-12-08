import React, { useState } from "react";
import"../../styles/coursesCard.css";

function CourseCard({ course }) {
    const [isModalOpen, setModalOpen] = useState(false);

    const toggleModal = () => {
        setModalOpen(!isModalOpen);
    };

    return (
        <div className="course-card">
            <img src={course.image} alt={course.name} className="course-card__image" />
            <div className="course-card__content">
                <h3 className="course-card__title">{course.name}</h3>
                <p className="course-card__description">
                    {course.description.length > 80
                        ? `${course.description.substring(0, 77)}...`
                        : course.description}
                </p>
                <button className="btn-primary" onClick={toggleModal}>Learn More</button>
            </div>

            {isModalOpen && (
                <div className="course-modal" onClick={toggleModal}>
                    <div
                        className="course-modal__content"
                        onClick={(e) => e.stopPropagation()} /* Prevent closing when clicking inside */
                    >
                        <h2>{course.name}</h2>
                        <p>{course.description}</p>
                        <button className="btn-secondary" onClick={toggleModal}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CourseCard;
