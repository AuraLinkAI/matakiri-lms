import React from "react";
import "./../styles/heroSlider.css";

function HeroSlider() {
    return (
        <section className="hero-slider">
           <img
    src="https://via.placeholder.com/1500x500"
    alt="Placeholder Banner"
    className="hero-slider__image"
/>

            <div className="hero-slider__content">
                <h1 className="hero-slider__title">Discover Your Potential with SomaNet</h1>
                <p className="hero-slider__description">
                    Join thousands of learners on their journey to success. Explore our wide range of courses tailored to meet your goals.
                </p>
                <a href="/signup" className="btn-primary">Get Started</a>
            </div>
        </section>
    );
}

export default HeroSlider;
