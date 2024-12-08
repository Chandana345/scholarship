import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

function AdminLogin({  }) {
    const [formData, setFormData] = useState({ username: '', password: '' });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios.post('http://localhost:8080/api/admin/login', formData);
            
            if (response.status === 200) {
                alert('Admin Login Successful!');
                navigate('/addscholarship'); // Navigate to the admin home page
            } else {
                alert('Invalid credentials');
                setError('Invalid credentials');
            }
        } catch (error) {
            console.error('Login failed', error);
            alert('Login failed. Please try again.');
            setError('Login failed. Please try again.');
        }
    };

    return (
        <div className='login'>
            <div className="logincontainer">
                <h2>Admin Login</h2>
                <form onSubmit={handleSubmit}>
                    <label>Username:</label>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <button className="button" type="submit">Login</button>
                </form>
            </div>
        </div>
    );
}

export default AdminLogin;
