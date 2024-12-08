import React from "react";

const ScholarshipDetails = ({ scholarship, onBack }) => {
  if (!scholarship) {
    return <p>No scholarship selected.</p>;
  }

  return (
    <div>
      <h3>Scholarship Details</h3>
      <h4>{scholarship.title}</h4>
      <p><strong>Deadline:</strong> {scholarship.deadline}</p>
     
      <p><strong>Amount:</strong> ${scholarship.amount}</p>
      
      <p><strong>Description:</strong> {scholarship.description || "No description available."}</p>
      <button onClick={onBack}>Back to List</button>
    </div>
  );
};

export default ScholarshipDetails;
