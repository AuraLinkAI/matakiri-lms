import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../features/auth/LoginPage";
import SignupPage from "../features/auth/SignupPage";
import ForgotPassword from "../features/auth/ForgotPassword";
import StudentDashboard from "../features/dashboard/StudentDashboard";
import InstructorDashboard from "../features/dashboard/InstructorDashboard";

function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/student/dashboard" element={<StudentDashboard />} />
                <Route path="/instructor/dashboard" element={<InstructorDashboard />} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;
