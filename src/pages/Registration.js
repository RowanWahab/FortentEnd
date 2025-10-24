import React, { useState } from "react";

function Registration() {
  const [form, setForm] = useState({ name: "", email: "", institution: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for registering, ${form.name}!`);
  };

  return (
    <div className="page">
      <h1>Registration</h1>
      <form onSubmit={handleSubmit} className="register-form">
        <label>Name:</label>
        <input name="name" value={form.name} onChange={handleChange} required />

        <label>Email:</label>
        <input type="email" name="email" value={form.email} onChange={handleChange} required />

        <label>Institution:</label>
        <input name="institution" value={form.institution} onChange={handleChange} required />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Registration;
