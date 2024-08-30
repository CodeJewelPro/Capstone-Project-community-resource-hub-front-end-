import React, { useEffect, useState } from 'react';
import { getCategories } from '../services/categoryService';

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
        <div>
            <h2>Categories List</h2>
            <ul>
                {categories.map(category => (
                    <li key={category._id}>
                        <strong>{category.name}</strong> - {category.description}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CategoriesList;