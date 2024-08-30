import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';  
import Footer from './components/Footer'; 
import CategoriesList from './components/CategoriesList'; 
import ResourcesPage from './components/ResourcesPage';  
import HomePage from './components/HomePage';
import MyProfile from './components/MyProfile';

const App = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const categories = ['Food', 'Clothing', 'Education'];

    const handleFilter = (category) => {
        setSelectedCategory(category);
    };

    return (
        <Router>
            <Navbar />
            <div className="container"> 
                <Routes>
                    <Route path="/" element={<HomePage />} />  {/* Home Page */}
                    <Route path="/categories" element={<CategoriesList />} />  {/* Categories Page */}
                    <Route path="/profile" element={<MyProfile />} />  {/* My Profile Page */}
                    <Route path="/resources" element={<ResourcesPage />} />  {/* Resources Page */}
                </Routes>
            </div>
            <Footer />  
        </Router>
    );
};

export default App;