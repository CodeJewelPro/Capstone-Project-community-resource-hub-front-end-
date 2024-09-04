import axios from 'axios';

const API_URL = 'http://localhost:5000/api/users';

// Fetch a single user by ID 
const getUserById = (id) => {
    return axios.get(`${API_URL}/${id}`);
};

// Create a new user
const createUser = (userData) => {
    return axios.post(API_URL, userData);
};

// Sign in user
const signInUser = (credentials) => {
    return axios.post(`${API_URL}/login`, credentials);
};

//Update a User by ID
const updateUser =(id, userData) => {
    return axios.put(`${API_URL}/${id}`, userData);
};

const deleteUser  = (id) => {
    return axios.delete(`${API_URL}/${id}`);
};

export { getUserById, createUser, signInUser, updateUser, deleteUser};

