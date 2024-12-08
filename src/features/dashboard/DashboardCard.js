import React from "react";
import "../../styles/dashboardCard.css";

function DashboardCard({ title, value, icon }) {
    return (
        <div className="dashboard-card">
            <div className="dashboard-card__icon">{icon}</div>
            <div className="dashboard-card__content">
                <h3>{value}</h3>
                <p>{title}</p>
            </div>
        </div>
    );
}

export default DashboardCard;
