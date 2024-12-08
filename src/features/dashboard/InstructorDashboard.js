import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import DashboardCard from "./DashboardCard";
import "../../styles/dashboard.css";

function InstructorDashboard() {
    const instructorStats = [
        { title: "Active Courses", value: "01", subtitle: "Ongoing Classes", bgColor: "rgba(63, 167, 74, 0.1)" },
        { title: "Enrolled Students", value: "02", subtitle: "Current Learners", bgColor: "rgba(213, 199, 64, 0.1)" },
        { title: "Pending Reviews", value: "03", subtitle: "Assessments to Grade", bgColor: "rgba(49, 34, 25, 0.1)" },
    ];

    return (
        <div className="dashboard">
            <Sidebar role="instructor" />
            <div className="dashboard__main">
                <Navbar userName="Jane Smith" />
                <div className="dashboard__content">
                    <h2>Dashboard Overview</h2>
                    <div className="dashboard__cards">
                        {instructorStats.map((stat, index) => (
                            <DashboardCard
                                key={index}
                                title={stat.title}
                                value={stat.value}
                                subtitle={stat.subtitle}
                                bgColor={stat.bgColor}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InstructorDashboard;
