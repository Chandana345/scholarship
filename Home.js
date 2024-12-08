import React from "react";

const Home = () => {
  return (
    <div>
      <div className="hero">
        <h1>Welcome to the Scholarship Tracker</h1>
        <p>Scholarship Opportunity for Bright and Underprivileged Students</p>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 Scholarship Tracker</p>
        <p>Contact us at: <a href="mailto:support@scholarshiptracker.com">support@scholarshiptracker.com</a></p>
        <div className="social-links">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> | 
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a> | 
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
