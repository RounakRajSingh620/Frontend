// src/components/Navbar.jsx
// import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">RBAC Dashboard</div>
            <ul className="navbar-links">
                <li>
                    <NavLink to="/users" className="navbar-link" activeClassName="active">
                        Users
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/roles" className="navbar-link" activeClassName="active">
                        Roles
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/permissions" className="navbar-link" activeClassName="active">
                        Permissions
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
