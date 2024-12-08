import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ScholarshipForm from "./ScholarshipForm"; // Form component for adding scholarships
import ScholarshipList from "./ScholarshipList"; // Component to display the list of scholarships

const AdminDashboard = () => {
  const navigate = useNavigate();

  // State for managing scholarships
  const [scholarships, setScholarships] = useState([]);
  const [loading, setLoading] = useState(true); // State to manage loading status
  const [error, setError] = useState(null); // State for error handling

  // Load scholarships from the backend API on component mount
  useEffect(() => {
    const fetchScholarships = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/admin/scholarships"); // Backend API URL
        if (!response.ok) {
          throw new Error("Failed to fetch scholarships");
        }
        const data = await response.json();
        setScholarships(data); // Update state with fetched scholarships
      } catch (error) {
        console.error("Error fetching scholarships:", error);
        setError(error.message); // Set error message
      } finally {
        setLoading(false); // Stop loading spinner
      }
    };

    fetchScholarships();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("adminLoggedIn"); // Clear admin session
    alert("You have been logged out.");
    navigate("/login"); // Redirect to login page
  };

  const addScholarship = async (newScholarship) => {
    try {
      const response = await fetch("http://localhost:8080/api/admin/scholarships/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newScholarship),
      });

      if (!response.ok) {
        throw new Error(`Failed to add scholarship: ${response.statusText}`);
      }

      const savedScholarship = await response.json();
      setScholarships((prevScholarships) => [...prevScholarships, savedScholarship]);
    } catch (error) {
      console.error("Error adding scholarship:", error);
      setError(error.message); // Set error message
    }
  };

  const deleteScholarship = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/api/admin/scholarships/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error(`Failed to delete scholarship: ${response.statusText}`);
      }

      setScholarships((prevScholarships) =>
        prevScholarships.filter((scholarship) => scholarship.id !== id)
      );
    } catch (error) {
      console.error("Error deleting scholarship:", error);
      setError(error.message); // Set error message
    }
  };
 
  return (
    <div className="admin-dashboard-container">
      <h2>Admin Dashboard</h2>

      {/* Admin Information */}
      <div className="admin-info">
        {/* You can add more admin-specific information here */}
      </div>
     
      {/* Scholarship Form and List */}
      <ScholarshipForm onAdd={addScholarship} />
      
      {/* Error Message */}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      {/* Loading Indicator */}
      {loading ? (
        <p>Loading scholarships...</p>
        
      ) : (
        /* Scholarship List */
        <ScholarshipList scholarships={scholarships} onDelete={deleteScholarship} />
      )}
         
      {/* Logout Button */}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default AdminDashboard;
