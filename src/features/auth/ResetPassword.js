import React from "react";
import "../../styles/auth.css";

function ResetPasswordPage() {
    return (
        <div className="auth-page">
            <div className="auth-container">
                <h2>Reset Password</h2>
                <p>Enter a new password for your account.</p>
                <form>
                    <div className="form-group">
                        <label>New Password</label>
                        <input type="password" placeholder="Enter a new password" />
                    </div>
                    <div className="form-group">
                        <label>Confirm Password</label>
                        <input type="password" placeholder="Confirm your new password" />
                    </div>
                    <button type="submit" className="btn-primary">Reset Password</button>
                </form>
            </div>
        </div>
    );
}

export default ResetPasswordPage;
