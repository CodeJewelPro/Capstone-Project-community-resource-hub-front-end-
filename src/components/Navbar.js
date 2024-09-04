import React from 'react';
import { Link } from 'react-router-dom';
import '../components/Navbar.css';

const Navbar = ({ user }) => {
    return (
        <nav className="navbar">
            <div className="logo">
                <Link to="/">Community Resource Hub</Link>
            </div>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/categories">Categories</Link>
                <Link to="/resources">Resources</Link>
                <Link to="/profile">My Profile</Link>
                {user ? (
                    <span>Welcome, {user.email}</span>
                ) : (
                    <Link to="/signin">Sign In</Link> // Add sign-in link
                )}
            </div>
        </nav>
    );
};

export default Navbar;