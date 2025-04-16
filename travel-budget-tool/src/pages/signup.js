// src/pages/Signup.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./auth.css";

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here you could add validations and save user info
    console.log("User registered:", formData);

    // After signup, redirect to login
    navigate("/login");
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <p className="subtitle">Create your account</p>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Create Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Create Account</button>

        <div className="link-text">
          Already have an account? <a href="/login">Login</a>
        </div>
      </form>
    </div>
  );
}

export default Signup;
