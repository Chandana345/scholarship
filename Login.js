import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import axios from 'axios';

function Login({ onStudentLogin }) {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8080/api/users/login', formData);

            if (response.data.success) { // Check for success field in response
                // Store user ID and email in local storage for further use
                localStorage.setItem('userId', response.data.userId);
                alert('Login Successful!'); // Show success alert
                navigate('/student-dashboard'); // Navigate to the home page
            } else {
                alert('Invalid email or password'); // Show failure alert
            }
        } catch (error) {
            console.error('Login failed', error);
            alert('An error occurred. Please try again.'); // Show failure alert
        }
    };

    return (
        <div className='login'>
            <div className="logincontainer">
                
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
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

                <div className="login-links">
                    <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
                    <p><Link to="/forgot">Forgot Password?</Link></p>

                    {/* Link to Admin Login page */}
                    <p>Are you an admin? <Link to="/adminlogin">Admin Login</Link></p>
                </div>
            </div>
        </div>
    );
}

export default Login;
