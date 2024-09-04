import React, { useState, useEffect } from 'react';
import { updateUser, getUserById, deleteUser } from '../services/userService';
import '../components/MyProfile.css';

const MyProfile = ({ userId, onLogout }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                if (userId) {
                    const fetchedUser = await getUserById(userId);
                    setUser(fetchedUser.data);
                } else {
                    console.error('No userId provided');
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUser();
    }, [userId]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateUser(userId, user);
            console.log('Profile updated:', user);
        } catch (error) {
            console.error('Error updating profile:', error);
        }
    };

    const handleDeleteResource = async (resourceId) => {
        try {
            const updatedResources = user.savedResources.filter(
                (resource) => resource._id !== resourceId
            );

            const updatedUser = { ...user, savedResources: updatedResources };

            await updateUser(userId, updatedUser);
            setUser(updatedUser);
            console.log('Resource deleted');
        } catch (error) {
            console.error('Error deleting resource:', error);
        }
    };

    const handleDeleteAccount = async () => {
        if (window.confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
            try {
                await deleteUser(userId);
                onLogout(); // Logs the user out after deletion
            } catch (error) {
                console.error('Error deleting account:', error);
            }
        }
    };

    if (!user) return <div>Loading...</div>;

    return (
        <div className="profile-container">
            <h2>My Profile</h2>
            <form onSubmit={handleSubmit} className="profile-form">
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={user.name}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={user.email}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="languagePreference">Language Preference:</label>
                    <input
                        type="text"
                        id="languagePreference"
                        name="languagePreference"
                        value={user.languagePreference}
                        onChange={handleInputChange}
                    />
                </div>
                <button type="submit" className="update-button">Update Profile</button>
                <button type="button" className="logout-button" onClick={onLogout}>Logout</button>
                <button type="button" className="delete-account-button" onClick={handleDeleteAccount}>Delete Account</button>
            </form>

            <section className="saved-resources">
                <h2>Saved Resources</h2>
                <ul>
                    {user.savedResources.map((resource, index) => (
                        <li key={index}>
                            {resource.name}
                            <button onClick={() => handleDeleteResource(resource._id)} className="delete-button">Delete</button>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default MyProfile;