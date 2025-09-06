import React, { useState } from "react";
import { useTheme } from "../Components/ThemeContext";
import { Link } from "react-router-dom"; // 👈 yeh import karo
import "./CSS/SignupSection.css";

const SignupSection = () => {
  const { theme } = useTheme();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      setError("⚠️ Passwords do not match!");
      return;
    }

    setError("");
    console.log("Form submitted ✅", form);
    // yahan API call kar sakte ho backend ko bhejne ke liye
  };

  return (
    <section className={`signup-section ${theme}`}>
      <div className="signup-container">
        <h2 className="signup-title">
          Create <span>Account</span>
        </h2>
        <p className="signup-subtitle">
          Join me and explore my portfolio more deeply 🚀
        </p>

        <form className="signup-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={form.confirmPassword}
            onChange={handleChange}
            required
          />

          {error && <p className="error-message">{error}</p>}

          <button type="submit" className="btn-main">
            Sign Up
          </button>
        </form>

        <p className="login-redirect">
          Already have an account?{" "}
          <Link to="/login">Login</Link> {/* 👈 reload nahi hoga */}
        </p>
      </div>
    </section>
  );
};

export default SignupSection;
