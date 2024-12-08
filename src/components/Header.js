import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "./../styles/header.css";

function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="header__logo">
                    <img src="assets/images/logo.png" alt="SomaNet Logo" className="header__logo-img" />
                    <span className="header__logo-text">SomaNet</span>
                </div>
                <nav className="header__nav">
                    <ul className="header__nav-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/courses">Courses</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
                <div className="header__cta">
                    <Link to="/login" className="btn btn-primary">Get Started</Link>
                </div>
            </div>
        </header>
    );
}

export default Header;
