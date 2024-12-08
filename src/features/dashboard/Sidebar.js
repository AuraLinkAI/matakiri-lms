import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/sidebar.css";

function Sidebar({ role }) {
    const menuItems = [
        { name: "Dashboard", icon: "fas fa-home", path: `/${role}/dashboard` },
        { name: "My Courses", icon: "fas fa-book", path: `/${role}/courses` },
        { name: "Profile", icon: "fas fa-user", path: `/${role}/profile` },
    ];

    const footerItems = [
        { name: "Settings", icon: "fas fa-cog", path: `/${role}/settings` },
        { name: "Logout", icon: "fas fa-sign-out-alt", path: "/logout" },
    ];

    return (
        <aside className="sidebar">
            <div className="sidebar__logo">
                <img
                    src="/assets/images/logo.png"
                    alt="SomaNet Logo"
                />
                <h3>SomaNet</h3>
            </div>
            <nav className="sidebar__menu">
                <ul>
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            <NavLink
                                to={item.path}
                                className={({ isActive }) =>
                                    isActive ? "active" : ""
                                }
                            >
                                <i className={item.icon}></i> {item.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="sidebar__footer">
                <ul>
                    {footerItems.map((item, index) => (
                        <li key={index}>
                            <NavLink
                                to={item.path}
                                className={({ isActive }) =>
                                    isActive ? "active" : ""
                                }
                            >
                                <i className={item.icon}></i> {item.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    );
}

export default Sidebar;
