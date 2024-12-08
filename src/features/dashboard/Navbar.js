import React from "react";
import "../../styles/navbar.css";

function Navbar({ userName }) {
    return (
        <header className="navbar">
            <div className="navbar__left">
                <h2>Welcome, {userName}</h2>
            </div>
            <div className="navbar__right">
                <button className="navbar__notification">
                    <i className="fas fa-bell"></i>
                </button>
                <div className="navbar__profile">
                    <img
                        src="/assets/images/hero 1.jpeg"
                        alt="Profile"
                        className="navbar__profile-img"
                    />
                    <span>{userName}</span>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
