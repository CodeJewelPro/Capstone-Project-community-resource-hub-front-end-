import React, { useEffect, useState } from 'react';
import { getCategories } from '../services/categoryService';
import './CategoriesList.css'; 

const CategoriesList = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories().then(response => {
            setCategories(response.data);
        }).catch(error => {
            console.error('Error fetching categories:', error);
        });
    }, []);

    return (
        <div className="categories-container">
            <h2>Explore Categories</h2>
            <p>Choose a category below to explore the avaiable resources. We try our best to connect you with the resources  you need!</p>
            <ul className="categories-list">
                {categories.map(category => (
                    <li key={category._id} className="category-item">
                        <h3>{category.name}</h3>
                        <p>{category.description}</p>
                        <button onClick={() => window.location.href=`/resources?category=${category.name}`}>
                            View Resources
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CategoriesList;