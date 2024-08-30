import React, { useEffect, useState } from 'react';
import {getResources} from '../services/resourceService'

const ResourcesList = () => {
    const [resources, setResources] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/resources')
            .then(response => response.json())
            .then(data => setResources(data))
            .catch(error => console.error('Error fetching resources:', error));
    }, []);  // Fetch resources from the backend


    return (
        <div>
            <h2>Available Resources</h2>
            <ul>
                {resources.map(resource => (
                    <li key={resource._id}>
                        <strong>{resource.name}</strong> - {resource.category}
                        </li>
                ))}
            </ul>
        </div>
    );
};

export default ResourcesList;