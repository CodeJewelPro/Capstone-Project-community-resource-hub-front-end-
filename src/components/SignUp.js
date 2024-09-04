import React, { useState } from 'react';
import { createUser } from '../services/userService';
import { useNavigate } from 'react-router-dom';

const SignUp = ({ onSignIn }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        languagePreference: 'English'
    });
    const [error, setError] = useState(''); // State to capture error messages

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic validation before submitting the form
        if (!formData.name || !formData.email || !formData.password) {
            setError('All fields are required');
            return;
        }

        try {
            const response = await createUser(formData);
            if (response) {
                // Automatically sign in the user after sign up
                onSignIn(response.data);
                navigate('/profile');
            }
        } catch (error) {
            if (error.response && error.response.status === 400) {
                setError(error.response.data.message);
            } else {
                setError('An error occurred during sign-up. Please try again.');
            }
            console.error('Error signing up:', error);
        }
    };

    return (
        <div className="signup-container">
            <h2>Sign Up</h2>
            {error && <p className="error-message">{error}</p>}
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
                    <label>Email:</label>
                    <input 
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input 
                        type="password" 
                        name="password" 
                        value={formData.password} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div>
                    <label>Language Preference:</label>
                    <input 
                        type="text" 
                        name="languagePreference" 
                        value={formData.languagePreference} 
                        onChange={handleChange} 
                    />
                </div>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUp;