import React, { useState } from 'react';
import Navbar from './components/Navbar';  
import Footer from './components/Footer'; 
import CategoryFilter from './components/CategoryFilter';
import ResourcesList from './components/ResourcesList';

const App = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const categories = ['Food', 'Clothing', 'Education'];

    const handleFilter = (category) => {
        setSelectedCategory(category);
    };

    return (
        <div>
            <Navbar /> 
            <div className="container">
                <h1>Community Resource Hub</h1>
                <p>Welcome to the Community Resource Hub. Start exploring resources!</p>
                <CategoryFilter categories={categories} onFilter={handleFilter} />
                <p>Selected Category: {selectedCategory}</p>
            </div>
            <Footer />  
        </div>
    );
};

export default App;