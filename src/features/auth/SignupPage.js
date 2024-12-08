import React from "react";
import { Link } from "react-router-dom";
import "../../styles/auth.css";

function SignupPage() {
    return (
        <div className="auth-page">
            <div className="auth-container">
                <div className="auth-left">
                    <h2>Hey There!</h2>
                    <p>Create an account to start your learning journey with SomaNet.</p>
                    <Link to="/login" className="btn-outline">Sign In</Link>
                </div>
                <div className="auth-right">
                    <h2>Sign Up</h2>
                    <form>
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" placeholder="Enter your full name" />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" placeholder="Enter your email" />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" placeholder="Create a password" />
                        </div>
                        <button type="submit" className="btn-primary">Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignupPage;
