import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import "../../styles/dashboard.css";

function Dashboard() {
    return (
        <div className="dashboard">
            <Sidebar role="student" />
            <div className="dashboard__main">
                <Navbar userName="John Doe" />
                <div className="dashboard__content">
                    <Outlet /> {/* Dynamic content goes here */}
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
