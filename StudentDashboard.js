import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './StudentDashboard.css';

function ScholarshipList() {
    const [scholarships, setScholarships] = useState([]);
    const [userData, setUserData] = useState({});
    const [error, setError] = useState('');
    const [toastMessage, setToastMessage] = useState('');
    const [showToast, setShowToast] = useState(false);
    const [appliedScholarships, setAppliedScholarships] = useState([]);

    // Fetch scholarships from the backend API
    useEffect(() => {
        const fetchScholarships = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/scholarships/all`);
                setScholarships(response.data);
            } catch (error) {
                console.error("Error fetching scholarships:", error);
                setToastMessage("Failed to load scholarships.");
                setShowToast(true);
                setTimeout(() => setShowToast(false), 3000);
            }
        };
        fetchScholarships();
    }, []);

    // Fetch user data
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const userId = localStorage.getItem('userId');
                if (userId) {
                    const response = await axios.get(`http://localhost:8080/api/users/profile?userId=${userId}`);
                    setUserData(response.data);
                } else {
                    setError("User not logged in. Please log in to apply for scholarships.");
                }
            } catch (error) {
                console.error("Error fetching user data:", error);
                setError("Could not load user data.");
            }
        };
        fetchUserData();
    }, []);

    // Function to handle the Apply Now button
    const handleApplyNow = async (scholarship) => {
        const applicationDetails = {
            scholarshipId: scholarship.id,
            scholarshipName: scholarship.name,
            userName: userData.name,
            email: userData.email,
            status: "Applied",
        };

        try {
            const response = await axios.post(`http://localhost:8080/api/applications/submit`, applicationDetails);
            console.log(response.data);
            setToastMessage("Application submitted successfully!");
            setShowToast(true);
            setAppliedScholarships((prev) => [...prev, scholarship.id]);
        } catch (error) {
            console.error("Error submitting application:", error);
            setToastMessage("Failed to submit application.");
            setShowToast(true);
        } finally {
            setTimeout(() => setShowToast(false), 3000);
        }
    };

    return (
        <div className="scholarshiplist">
            <div className="container">
                <h2>Available Scholarships</h2>
                {error && <p className="error">{error}</p>}
                {scholarships.length > 0 ? (
                    scholarships.map((scholarship) => (
                        <div key={scholarship.id} className="card">
                            <h3>{scholarship.name}</h3>
                            <p><strong>Description:</strong> {scholarship.description}</p>
                            <p><strong>Type:</strong> {scholarship.type}</p>
                            <p><strong>Eligibility:</strong> {scholarship.eligibility}</p>
                            <p><strong>Deadline:</strong> {scholarship.deadline}</p>
                            <p><strong>Amount:</strong> ${scholarship.amount}</p>
                            <p><strong>Institution:</strong> {scholarship.institution}</p>
                            <p><strong>Application URL:</strong> <a href={scholarship.applicationUrl} target="_blank" rel="noopener noreferrer">{scholarship.applicationUrl}</a></p>
                            <p><strong>Contact Email:</strong> {scholarship.contactEmail}</p>
                            <p><strong>Status:</strong> {scholarship.status}</p>
                            <button
                                className="button"
                                onClick={() => handleApplyNow(scholarship)}
                                
                                disabled={appliedScholarships.includes(scholarship.id)}
                            >
                                {appliedScholarships.includes(scholarship.id) ? "Applied" : "Apply Now"}
                            </button>
                        </div>
                    ))
                ) : (
                    <p>No scholarships available at the moment.</p>
                )}
            </div>

            {/* Toast Notification */}
            {showToast && (
                <div className="toast">
                    {toastMessage}
                    <span className="close-toast" onClick={() => setShowToast(false)}>
                        &#10006;
                    </span>
                </div>
            )}
        </div>
    );
}

export default ScholarshipList;
