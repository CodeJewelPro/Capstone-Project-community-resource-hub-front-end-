import React, { useState } from 'react';
import UsersList from './UsersList';  

const MyProfile = () => {
    const [user, setUser] = useState({
        name: 'John Doe',
        email: 'johndoe@example.com',
        languagePreference: 'English'
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle profile update 
        console.log('Profile updated:', user);
    };

    return (
        <div className="profile-container">
            <h2>My Profile</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name:</label>
                    <input type="text" name="name" value={user.name} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" name="email" value={user.email} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                    <label>Language Preference:</label>
                    <input type="text" name="languagePreference" value={user.languagePreference} onChange={handleInputChange} />
                </div>
                <button type="submit">Update Profile</button>
            </form>

            <section className="users-section">
                <h2>Users List</h2>
                <UsersList />  
            </section>
        </div>
    );
};

export default MyProfile;