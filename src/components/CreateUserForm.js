import React, { useState } from 'react';
import { createUser } from '../services/userService';

const CreateUserForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [languagePreference, setLanguagePreference] = useState('English');

    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = { name, email, password, languagePreference };
        createUser(userData)
            .then(response => {
                alert('User created successfully!');
                setName('');
                setEmail('');
                setPassword('');
                setLanguagePreference('English');
            })
            .catch(error => {
                console.error('Error creating user:', error);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Create User</h2>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
            <input type="text" value={languagePreference} onChange={(e) => setLanguagePreference(e.target.value)} placeholder="Language Preference" />
            <button type="submit">Create User</button>
        </form>
    );
};

export default CreateUserForm;