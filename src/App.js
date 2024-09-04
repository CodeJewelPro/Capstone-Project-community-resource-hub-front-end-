import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';  
import Footer from './components/Footer'; 
import HomePage from './components/HomePage';
import CategoriesList from './components/CategoriesList'; 
import ResourcesPage from './components/ResourcesPage'; 
import MyProfile from './components/MyProfile';
import SignIn from './components/SignIn'; 
import SignUp from './components/SignUp';
import '../src/styles.css';

const App = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null); 

    const handleSignIn = (user) => {
        setUser(user);
        localStorage.setItem('user', JSON.stringify(user)); 
    };

    const handleLogout = () => {
        setUser(null);
        localStorage.removeItem('user'); 
        window.location.href = '/signin'; 
    };

    return (
        <Router>
            <Navbar user={user} onLogout={handleLogout} />
            <div className="container"> 
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/categories" element={<CategoriesList />} />
                    <Route path="/resources" element={<ResourcesPage />} />
                    <Route path="/profile" element={<MyProfile userId={user?._id} onLogout={handleLogout} />} />
                    <Route path="/signin" element={<SignIn onSignIn={handleSignIn} />} /> 
                    <Route path="/signup" element={<SignUp onSignIn={handleSignIn} />} /> 
                   
                </Routes>
            </div>
            <Footer />  
        </Router>
    );
};

export default App;