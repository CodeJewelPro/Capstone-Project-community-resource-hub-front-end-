import React, { useState, useEffect } from 'react';
import { getResources, createResource, updateResource, deleteResource } from '../services/resourceService';
import '../components/ResourcesPage.css'; 

const ResourcesPage = () => {
    const [resources, setResources] = useState([]);
    const [filteredResources, setFilteredResources] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [formData, setFormData] = useState({
        name: '',
        category: '',
        description: '',
    });
    const [isEditMode, setIsEditMode] = useState(false);
    const [resourceToEdit, setResourceToEdit] = useState(null);

    useEffect(() => {
        fetchResources();
    }, []);

    const fetchResources = async () => {
        try {
            const response = await getResources();
            setResources(response.data);
            setFilteredResources(response.data);
        } catch (error) {
            console.error('Error fetching resources:', error);
        }
    };

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
        filterResources(e.target.value, selectedCategory);
    };

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
        filterResources(searchQuery, e.target.value);
    };

    const filterResources = (search, category) => {
        let filtered = resources;
        if (category !== 'all') {
            filtered = filtered.filter(resource => resource.category === category);
        }
        if (search) {
            filtered = filtered.filter(resource => resource.name.toLowerCase().includes(search.toLowerCase()));
        }
        setFilteredResources(filtered);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (isEditMode) {
                await updateResource(resourceToEdit._id, formData);
            } else {
                await createResource(formData);
            }
            fetchResources();
            resetForm();
        } catch (error) {
            console.error('Error saving resource:', error);
        }
    };

    const handleEdit = (resource) => {
        setIsEditMode(true);
        setResourceToEdit(resource);
        setFormData({
            name: resource.name,
            category: resource.category,
            description: resource.description,
        });
    };

    const handleDelete = async (resourceId) => {
        try {
            await deleteResource(resourceId);
            fetchResources(); // Refresh the resource list after deletion
        } catch (error) {
            console.error('Error deleting resource:', error);
        }
    };

    const resetForm = () => {
        setFormData({
            name: '',
            category: '',
            description: '',
        });
        setIsEditMode(false);
        setResourceToEdit(null);
    };

    return (
        <div className="resources-container">
            <h1>Browse Community Resources</h1>
            <p>Explore a variety of community resources that cater to your needs. Use the filters below to find exactly what you're looking for.</p>

            <div className="filter-section">
                <input
                    type="text"
                    placeholder="Search resources..."
                    value={searchQuery}
                    onChange={handleSearch}
                />
                <select value={selectedCategory} onChange={handleCategoryChange}>
                    <option value="all">All Categories</option>
                    <option value="Food">Food</option>
                    <option value="Education">Education</option>
                    <option value="Clothing">Clothing</option>
                </select>
            </div>

            <div className="form-section">
                <h2>{isEditMode ? 'Update Resource' : 'Create Resource'}</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Name:</label>
                        <input 
                            type="text" 
                            name="name" 
                            value={formData.name} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                    <div>
                        <label>Category:</label>
                        <input 
                            type="text" 
                            name="category" 
                            value={formData.category} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                    <div>
                        <label>Description:</label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit">{isEditMode ? 'Update Resource' : 'Create Resource'}</button>
                    {isEditMode && <button type="button" onClick={resetForm}>Cancel Edit</button>}
                </form>
            </div>

            <div className="resource-list">
                <h2>All Resources</h2>
                {filteredResources.length > 0 ? (
                    filteredResources.map(resource => (
                        <div key={resource._id} className="resource-item">
                            <h3>{resource.name}</h3>
                            <p>{resource.description}</p>
                            <button onClick={() => handleEdit(resource)}>Edit</button>
                            <button onClick={() => handleDelete(resource._id)}>Delete</button>
                        </div>
                    ))
                ) : (
                    <p>No resources found.</p>
                )}
            </div>
        </div>
    );
};

export default ResourcesPage;