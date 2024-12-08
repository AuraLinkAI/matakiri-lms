import React from "react";
import "./../styles/heroSection.css";

function HeroSection() {
    return (
        <section className="hero-section">
            <img
                src="/assets/images/hero 1.jpeg"
                alt="Hero Banner"
                className="hero-section__image"
            />
            <div className="hero-section__content">
                <h1 className="hero-section__title">Discover Your Potential with SomaNet</h1>
                <p className="hero-section__description">
                    Join thousands of learners on their journey to success. Explore our wide range of courses tailored to meet your goals.
                </p>
                <a href="/signup" className="hero-section__button">Get Started</a>
            </div>
        </section>
    );
}

export default HeroSection;
