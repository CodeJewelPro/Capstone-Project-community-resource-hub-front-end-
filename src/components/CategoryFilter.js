import React from 'react';

const CategoryFilter = ({ categories, onFilter }) => {
    return (
        <select onChange={(e) => onFilter(e.target.value)}>
            <option value="all">All Categories</option>
            {categories.map((category) => (
                <option key={category} value={category}>
                    {category}
                </option>
            ))}
        </select>
    );
};

export default CategoryFilter;