import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // useNavigate for redirection
import { Link } from "react-router-dom";

const AdminSignUpPage = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const navigate = useNavigate(); // Hook to handle navigation

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you would typically save the new admin to your backend, and on success:
    // Assuming the sign-up was successful:
    navigate("/adminDashboard"); // Redirect to Admin Dashboard
  };

  return (
    <div>
      <h2>Admin Sign Up Page</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" name="username" value={formData.username} onChange={handleChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an admin account? <Link to="/adminLogin">Login</Link>
      </p>
      <p>
        <Link to="/">Back to Login</Link>
      </p>
    </div>
  );
};

export default AdminSignUpPage;
