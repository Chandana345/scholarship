import React from "react";

const ScholarshipList = ({ scholarships }) => {
  return (
    <div className="scholarship-list-container">
      <h3>Scholarships</h3>
      {scholarships.length === 0 ? (
        <p>No scholarships available.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>Amount</th>
              <th>Eligibility Criteria</th>
            </tr>
          </thead>
          <tbody>
            {scholarships.map((scholarship) => (
              <tr key={scholarship.id}>
                <td>{scholarship.id}</td>
                <td>{scholarship.name}</td>
                <td>{scholarship.description}</td>
                <td>{scholarship.amount}</td>
                <td>{scholarship.eligibilityCriteria}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ScholarshipList;
