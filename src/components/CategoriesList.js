import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCategories } from '../services/categoryService';
import '../components/CategoriesList.css';

const CategoriesList = () => {
    const [categories, setCategories] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        getCategories()
            .then(response => setCategories(response.data))
            .catch(error => console.error('Error fetching categories:', error));
    }, []);

    const handleCategoryClick = (categoryName) => {
        navigate(`/resources?category=${categoryName}`);
    };

    const handleSearch = () => {
        
        console.log('Search query:', searchQuery);
    };

    return (
        <div className="categories-container">
        
            <section className="intro-section">
                <h2>Explore Our Categories</h2>
                <p>Our community offers a wide range of resources categorized to help you find exactly what you need.</p>
            </section>

            
            <section className="search-section">
                <input 
                    type="text" 
                    placeholder="Search categories..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)} 
                />
                <button onClick={handleSearch}>Search</button>
            </section>

            
            <section className="featured-categories-section">
                <div className="featured-categories">
                    <div className="category-card">
                        <h3>Food Assistance</h3>
                        <p>Find local food banks and meal programs.</p>
                        <button onClick={() => window.location.href ='/resources?category=Food'}>Explore</button>
                    </div>
                    <div className="category-card">
                        <h3>Education</h3>
                        <p>Access educational resources for all ages.</p>
                        <button onClick={() => window.location.href ='/resources?category=Education'}>Explore</button>
                    </div>
                </div>
            </section>

            
            <section className="categories-section">
                <div className="categories-grid">
                    {categories.map(category => (
                        <div className="category-card" key={category._id}>
                            <h3>{category.name}</h3>
                            <p>{category.description}</p>
                            <button onClick={() => handleCategoryClick(category.name)}>View Resources</button>
                        </div>
                    ))}
                </div>
            </section>

            
            <section className="cta-section">
                <h2>Can't Find What You're Looking For?</h2>
                <p>If you need help finding the right resources, don’t hesitate to reach out to our support team.</p>
                <button onClick={() => navigate('/contact')}>Contact Us</button>
            </section>
        </div>
    );
};

export default CategoriesList;