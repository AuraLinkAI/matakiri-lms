import React from "react";
import { Link } from "react-router-dom";
import "../../styles/auth.css";

function LoginPage() {
    return (
        <div className="auth-page">
            <div className="auth-container">
                <div className="auth-left">
                    <h2>Hey There!</h2>
                    <p>Welcome back. You are just one step away from your feed.</p>
                    <Link to="/signup" className="btn-outline">Sign Up</Link>
                </div>
                <div className="auth-right">
                    <h2>Sign In</h2>
                    <form>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" placeholder="Enter your email" />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" placeholder="Enter your password" />
                        </div>
                        <div className="form-group">
                            <div className="form-options">
                                <label className="form-checkbox">
                                    <input type="checkbox" />
                                    Keep me logged in
                                </label>
                                <Link to="/forgot-password" className="forgot-password">Forgot Password?</Link>
                            </div>
                        </div>
                        <button type="submit" className="btn-primary">Sign In</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
