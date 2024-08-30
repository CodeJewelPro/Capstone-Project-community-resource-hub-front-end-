import React from "react";
import { Link } from 'react-router-dom';
import '../components/Navbar.css'; 
const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <h1 className="navbar-logo">Community Resource Hub</h1>
                <ul className="navbar-menu">
                    <li className="navbar-item">
                        <Link to="/" className="navbar-link">Home</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/categories" className="navbar-link">Categories</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/profile" className="navbar-link">My Profile</Link>
                        </li>
                        <li className="navbar-item">
                        <Link to="/resources" className="navbar-link">Resources Available</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;