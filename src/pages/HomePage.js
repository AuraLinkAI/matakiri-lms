import React from "react";
import HeroSection from "../components/HeroSection";
import ExploreCourses from "../features/homepage/ExploreCourses";
import Footer from "../components/Footer";
import Header from "../components/Header";

function HomePage() {
    return (
        <div>
             {/* Header */}
                <Header />
            {/* Hero Section */}
            <HeroSection/>

            {/* Explore Courses Section */}
            <ExploreCourses />

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default HomePage;
