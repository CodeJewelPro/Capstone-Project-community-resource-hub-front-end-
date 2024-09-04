import React, { useState } from 'react';
import { createUser, signInUser } from '../services/userService'; // Ensure both createUser and signInUser are imported
import { useNavigate } from 'react-router-dom';

const SignIn = ({ onSignIn }) => {
    const [isSignUp, setIsSignUp] = useState(false); // State to toggle between sign-in and sign-up
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });
    const [error, setError] = useState(''); // State to capture error messages
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isSignUp) {
            // Handle sign-up logic
            try {
                const newUser = await createUser(formData);
                console.log('User created:', newUser.data);
                onSignIn(newUser.data);
                navigate('/profile');
            } catch (error) {
                console.error('Error creating user:', error);
                setError('Error creating user. Please try again.');
            }
        } else {
            // Handle sign-in logic
            try {
                const user = await signInUser(formData);
                if (user && user.data) {
                    console.log('User signed in:', user.data);
                    onSignIn(user.data);
                    navigate('/profile');
                } else {
                    setError('Invalid credentials');
                }
            } catch (error) {
                console.error('Error signing in:', error);
                setError('Error signing in. Please try again.');
            }
        }
    };

    return (
        <div className="sign-in-container">
            <h2>{isSignUp ? 'Create Account' : 'Sign In'}</h2>
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={handleSubmit}>
                {isSignUp && (
                    <div className="form-group">
                        <label>Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                )}
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <button type="submit">{isSignUp ? 'Create Account' : 'Sign In'}</button>
            </form>
            <p onClick={() => setIsSignUp(!isSignUp)}>
                {isSignUp ? 'Already have an account? Sign In' : 'Don’t have an account? Sign Up'}
            </p>
        </div>
    );
};

export default SignIn;