import React from "react";
import { Link } from 'react-router-dom';
import '../components/Navbar.css'; 
const Navbar = () => {
    return(
        <nav className="navbar">
            <h1>Community Resource Hub</h1>
             <ul className="nav-links">
                <li><Link to ="/">Home</Link></li>
                <li><Link to = "/categories">Categories</Link></li>
                <li><Link to = "/profile">My Profile</Link></li>
             </ul>
        </nav>
    );
};

export default Navbar;