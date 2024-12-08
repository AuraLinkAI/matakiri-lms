import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import DashboardCard from "./DashboardCard";
import "../../styles/dashboard.css";

function StudentDashboard() {
    const studentStats = [
        { title: "Enrolled Courses", value: "01", subtitle: "Active Courses", bgColor: "rgba(63, 167, 74, 0.1)" },
        { title: "Pending Assignments", value: "02", subtitle: "Upcoming Tasks", bgColor: "rgba(213, 199, 64, 0.1)" },
        { title: "Completed Courses", value: "03", subtitle: "Certificates Earned", bgColor: "rgba(49, 34, 25, 0.1)" },
    ];

    return (
        <div className="dashboard">
            <Sidebar role="student" />
            <div className="dashboard__main">
                <Navbar userName="John Doe" />
                <div className="dashboard__content">
                    <h2>Dashboard Overview</h2>
                    <div className="dashboard__cards">
                        {studentStats.map((stat, index) => (
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

export default StudentDashboard;
