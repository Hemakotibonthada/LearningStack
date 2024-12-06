import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();  // Hook to programmatically navigate

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/login', {
                username,
                password
            });

            localStorage.setItem('username', username);
            alert(response.data.message);

            onLogin();  // Update parent state

            // Redirect to landing page after login
            navigate('/');
        } catch (err) {
            console.error('Login Error:', err.response?.data);
            alert(err.response?.data?.message || 'Login failed');
        }
    };

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <h2>Login</h2>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>

                <p>
                    Don't have an account? <span onClick={() => navigate('/signup')}>Signup here</span>
                </p>
            </form>
        </div>
    );
};

export default Login;
   