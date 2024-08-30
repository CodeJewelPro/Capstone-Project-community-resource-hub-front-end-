import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';  
import Footer from './components/Footer'; 
import CategoryFilter from './components/CategoryFilter';
import ResourcesList from './components/ResourcesList';
import UsersList from './components/UsersList';       
import CategoriesList from './components/CategoriesList'; 
import CreateUserForm from './components/CreateUserForm';

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
                    <Route path="/" element={
                        <>
                            <h1>Community Resource Hub</h1>
                            <p>Welcome to the Community Resource Hub. Start exploring resources!</p>
                            <CategoryFilter categories={categories} onFilter={handleFilter} />
                            <ResourcesList />
                            <CreateUserForm />
                            <UsersList />    
                            <CategoriesList />  
                            <p>Selected Category: {selectedCategory}</p>
                        </>
                    } />
                    <Route path="/categories" element={<CategoriesList />} />
                    <Route path="/profile" element={<div>My Profile</div>} />
                </Routes>
            </div>
            <Footer />  
        </Router>
    );
};

export default App;