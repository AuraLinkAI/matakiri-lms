import React from "react";
import "./../styles/footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__logo">
                    <h2>SomaNet</h2>
                </div>
                <div className="footer__links">
                    <a href="/">Home</a>
                    <a href="/courses">Courses</a>
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                </div>
                <div className="footer__copyright">
                    &copy; {new Date().getFullYear()} SomaNet. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

export default Footer;
