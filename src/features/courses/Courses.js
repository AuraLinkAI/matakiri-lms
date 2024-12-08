import React, { useState } from "react";
import CourseCard from "./CourseCard";
import "./styles/courses.css";

function Courses({ title, courses }) {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredCourses = courses.filter(course =>
        course.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <section className="courses">
            <h2>{title}</h2>
            <div className="courses__search">
                <input
                    type="text"
                    placeholder="Search for courses..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>
            <div className="courses__list">
                {filteredCourses.length > 0 ? (
                    filteredCourses.map(course => (
                        <CourseCard key={course.id} course={course} />
                    ))
                ) : (
                    <p className="courses__empty">No courses found.</p>
                )}
            </div>
        </section>
    );
}

export default Courses;
