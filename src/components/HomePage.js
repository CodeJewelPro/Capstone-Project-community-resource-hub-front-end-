import React, { useState } from 'react';
import CategoryFilter from './CategoryFilter';
import CreateUserForm from './CreateUserForm';

const HomePage = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const categories = ['Food', 'Clothing', 'Education'];

    const handleFilter = (category) => {
        setSelectedCategory(category);
    };

    return (
        <div className="home-container">
            <header className="hero-section">
                <h1>Welcome to the Community Resource Hub</h1>
                <p>Your one-stop destination for accessing various community resources.</p>
                <button onClick={() => window.location.href='/resources'}>View Resources</button>
                <button onClick={() => window.location.href='/categories'}>Explore Categories</button>
            </header>
            <section className="intro-section">
                <h2>Our Mission</h2>
                <p>We aim to connect individuals and families with the resources they need, from food and clothing to education and healthcare. Explore our categories and find the help you need today.</p>
            </section>
            <section className="resources-section">
                <h2>Available Resources</h2>
                <CategoryFilter categories={categories} onFilter={handleFilter} />
            </section>
            <section className="users-section">
                <CreateUserForm />
            </section>
        </div>
    );
};

export default HomePage;