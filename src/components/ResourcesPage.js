import React, { useEffect, useState } from 'react';
import { getResources } from '../services/resourceService';

const ResourcesPage = () => {
    const [resources, setResources] = useState([]);

    useEffect(() => {
        getResources().then(response => {
            setResources(response.data);
        }).catch(error => {
            console.error('Error fetching resources:', error);
        });
    }, []);

    return (
        <div className="resources-container">
            <h2>Resources</h2>
            <ul className="resources-list">
                {resources.map(resource => (
                    <li key={resource._id}>
                        <strong>{resource.name}</strong> - {resource.category}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ResourcesPage;