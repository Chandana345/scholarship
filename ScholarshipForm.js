import React, { useState } from "react";
import axios from "axios";
const ScholarshipForm = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [deadline, setDeadline] = useState("");
  const [amount, setAmount] = useState("");
 
  const [formData, setFormData] = useState({
    title: "",
    deadline: "",
    amount: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const newScholarship = { title, deadline, amount};
  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(formData);
    setFormData({ title: "", deadline: "", amount: "" });
    axios.post("http://localhost:8080/api/scholarships", newScholarship)
      .then(() => {
        setTitle("");
        setDeadline("");
        setAmount("");
        alert("Scholarship added successfully!");
      })
      .catch((error) => console.error("Error adding scholarship:", error));
 
  };
    
  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Scholarship</h3>
      <label>
        Title:
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Deadline:
        <input
          type="date"
          name="deadline"
          value={formData.deadline}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Amount:
        <input
          type="number"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit">Add Scholarship</button>
    </form>
  );
};

export default ScholarshipForm;
