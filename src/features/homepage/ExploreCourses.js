import React, { useState } from "react";
import CourseCard from "../../features/courses/CourseCard";
import "../../styles/exploreCourses.css";

function ExploreCourses() {
    const [searchQuery, setSearchQuery] = useState("");

    const courses = [
        {
            id: 1,
            name: "Diploma in Software Engineering",
            image: "/assets/images/hero 3.jpeg",
            description: "This course will cover the main areas that will enable learners to create large-scale, robust software systems.",
        },
        {
            id: 2,
            name: "Diploma in Data Science",
            image: "/assets/images/hero 3.jpeg",
            description: "The focus of this course is to provide a solid foundation on data analytics, machine learning, and data visualization.",
        },
        {
            id: 3,
            name: "Diploma in Sustainable Agricultural Practices",
            image: "/assets/images/hero 3.jpeg",
            description: "This course will emphasize agricultural practices that make the best use of available resources to improve sustainability.",
        },
    ];

    const filteredCourses = courses.filter(course =>
        course.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <section className="explore-courses">
            <h2>Explore Our Courses</h2>
            <div className="explore-courses__search">
                <input
                    type="text"
                    placeholder="Search for courses..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>
            <div className="explore-courses__list">
                {filteredCourses.length > 0 ? (
                    filteredCourses.map(course => (
                        <CourseCard key={course.id} course={course} />
                    ))
                ) : (
                    <p className="explore-courses__empty">No courses found.</p>
                )}
            </div>
        </section>
    );
}

export default ExploreCourses;
