import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function ViewScholarships() {
  const [scholarships, setScholarships] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchScholarships = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/scholarships/all");
        console.log("Fetched data:", response.data); // Debugging
        setScholarships(response.data);
      } catch (error) {
        console.error("Error fetching scholarships:", error);
        setError("Failed to load scholarships.");
      }
    };

    fetchScholarships();
  }, []);

  return (
    <div className="view-scholarships">
      <h1>Available Scholarships</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {scholarships.length === 0 ? (
        <p>No scholarships available</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Scholarship Name</th>
              <th>Description</th>
              <th>Deadline</th>
            </tr>
          </thead>
          <tbody>
            {scholarships.map((scholarship) => (
              <tr key={scholarship.id}>
                <td>
                  <Link to={`/scholarships/${scholarship.id}`}>{scholarship.name}</Link>
                </td>
                <td>{scholarship.description}</td>
                <td>{scholarship.deadline}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ViewScholarships;
