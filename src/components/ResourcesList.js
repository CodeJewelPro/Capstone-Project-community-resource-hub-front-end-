import React, { useEffect, useState } from 'react';
import { getResources } from '../services/resourceService';

const ResourcesList = () => {
    const [resources, setResources] = useState([]);

    useEffect(() => {
        const fetchResources = async () => {
            try {
                const response = await getResources();
                setResources(response.data);
            } catch (error) {
                console.error('Error fetching resources:', error);
            }
        };

        fetchResources();
    }, []);

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