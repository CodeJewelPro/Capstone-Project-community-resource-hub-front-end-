import axios from 'axios';

const API_URL = 'http://localhost:5000/api/categories';

// Fetch all categories
const getCategories = () => {
    return axios.get(API_URL);
};

// Fetch a single category by ID
const getCategoryById = (id) => {
    return axios.get(`${API_URL}/${id}`);
};

// Create a new category
const createCategory = (categoryData) => {
    return axios.post(API_URL, categoryData);
};

// Update a category by ID
const updateCategory = (id, categoryData) => {
    return axios.put(`${API_URL}/${id}`, categoryData);
};

// Delete a category by ID
const deleteCategory = (id) => {
    return axios.delete(`${API_URL}/${id}`);
};

export { getCategories, getCategoryById, createCategory, updateCategory, deleteCategory };