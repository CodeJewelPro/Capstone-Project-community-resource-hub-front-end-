import React, { useEffect, useState } from 'react';
import { getUsers, deleteUser } from '../services/userService';

const UsersList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(response => {
            setUsers(response.data);
        }).catch(error => {
            console.error('Error fetching users:', error);
        });
    }, []);

    const handleDelete = (id) => {
        deleteUser(id)
        .then(() => {
            setUsers(users.filter(user => user._id !== id));
        })
        .catch(error => {
            console.error('Error deleting user:', error);
        });
    };

    return (
        <div>
            <h2>Users List</h2>
            <ul>
                {users.map(user => (
                    <li key={user._id}>
                        <strong>{user.name}</strong> - {user.email}
                        <button onClick={() => handleDelete(user._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UsersList;