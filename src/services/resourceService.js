import axios from 'axios';

const API_URL = 'http://localhost:5000/api/resources';

// Fetch all resources
export const getResources = () => {
    return axios.get(API_URL);
};

// Fetch a single resource by ID
export const getResourceById = (id) => {
    return axios.get(`${API_URL}/${id}`);
};

// Create a new resource
export const createResource = (resourceData) => {
    return axios.post(API_URL, resourceData);
};

// Update an existing resource by ID
export const updateResource = (id, resourceData) => {
    return axios.put(`${API_URL}/${id}`, resourceData);
};

// Delete a resource by ID
export const deleteResource = (id) => {
    return axios.delete(`${API_URL}/${id}`);
};