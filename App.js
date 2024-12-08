import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login"; // User Login
import SignUp from "./components/SignUp";
import AdminLogin from "./components/AdminLogin"; // Admin Login
import ContactUs from './components/ContactUs';
import ScholarshipForm from "./components/StudentDashboard";

import AdminDashboard from "./components/AdminDashboard"; // Admin Dashboard
import StudentDashboard from "./components/StudentDashboard";
import AddScholarship from './components/AddScholarship';
import StudentDetails from './components/StudentDetails';
import Feedback from './components/Feedback';
const App = () => {
  return (
    <Router>
        <Navbar />
      <div className="app">
        <h1>Student Scholarship and Financial Aid</h1>
        <Routes>
          {/* Default route is set to LoginPage */}
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} /> {/* User Login (default route) */}
          <Route path="/signup" element={<SignUp />} /> {/* User Sign-Up */}
          <Route path="/adminLogin" element={<AdminLogin />} /> {/* Admin Login */}
          <Route path="/contactUs" element={<ContactUs />} /> 
          <Route path="/scholarship-form" element={<ScholarshipForm />} />
          <Route path="/studentdetails" element={<StudentDetails/>} />
          <Route path="/students/:studentId" element={<StudentDetails />} />
          <Route path="/student-dashboard" element={<StudentDashboard />} />
          <Route path="/addscholarship" element={<AddScholarship />} />
          {/* <Route path="/scholarshipdetails" element={<Scholar />} /> */}
          <Route path="/Feedback" element={<Feedback />} />
        
        </Routes>
      </div>
    </Router>
  );
};

export default App;
