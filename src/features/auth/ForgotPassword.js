import React from "react";
import { Link } from "react-router-dom";
import "../../styles/auth.css";

function ForgotPasswordPage() {
    return (
        <div className="auth-page">
            <div className="auth-container">
                <div className="auth-left">
                    <h2>Hey There!</h2>
                    <p>
                        Enter your email address, and we’ll send you a link to reset your password.
                    </p>
                    <Link to="/login" className="btn-outline">Back to Login</Link>
                </div>
                <div className="auth-right">
                    <h2>Forgot Password</h2>
                    <form>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" placeholder="Enter your email" />
                        </div>
                        <button type="submit" className="btn-primary">Send Reset Link</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ForgotPasswordPage;
