import axios from 'axios';

const API_URL = 'http://localhost:5000/api/users';

// Fetch all users
const getUsers = () => {
    return axios.get(API_URL);
};

// Fetch a single user by ID
const getUserById = (id) => {
    return axios.get(`${API_URL}/${id}`);
};

// Create a new user
const createUser = (userData) => {
    return axios.post(API_URL, userData);
};

// Update a user by ID
const updateUser = (id, userData) => {
    return axios.put(`${API_URL}/${id}`, userData);
};

// Delete a user by ID
const deleteUser = (id) => {
    return axios.delete(`${API_URL}/${id}`);
};

export { getUsers, getUserById, createUser, updateUser, deleteUser };