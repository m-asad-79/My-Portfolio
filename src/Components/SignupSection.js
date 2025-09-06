import React, { useState } from "react";
import { useTheme } from "../Components/ThemeContext";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Eye, EyeOff } from "lucide-react"; // 👈 icons
import "./CSS/SignupSection.css";

const SignupSection = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false); // 👈 toggle for password
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // 👈 toggle for confirm

  // ✅ Update form state on input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      setError("⚠️ Passwords do not match!");
      return;
    }

    setError("");

    try {
      const res = await axios.post("http://localhost:5000/api/users/signup", {
        name: form.name,
        email: form.email,
        password: form.password,
        confirmPassword: form.confirmPassword,
      });

      console.log("Signup Success ✅", res.data);
      navigate("/login");
    } catch (err) {
      console.log(err);
      if (err.response?.data?.message) {
        setError(err.response.data.message);
      } else {
        setError("Signup failed: " + err.message);
      }
    }
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

          {/* 🔹 Password Input with Eye */}
          <div className="password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="eye-btn"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {/* 🔹 Confirm Password Input with Eye */}
          <div className="password-wrapper">
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm Password"
              value={form.confirmPassword}
              onChange={handleChange}
              required
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="eye-btn"
            >
              {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {error && <p className="error-message">{error}</p>}

          <button type="submit" className="btn-main">
            Sign Up
          </button>
        </form>

        <p className="login-redirect">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </section>
  );
};

export default SignupSection;
