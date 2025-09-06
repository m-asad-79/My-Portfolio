import React from "react";
import { useTheme } from "../Components/ThemeContext";
import { Link } from "react-router-dom"; // 👈 import Link
import "./CSS/LoginSection.css";

const LoginSection = () => {
  const { theme } = useTheme();

  return (
    <section className={`login-section ${theme}`}>
      <div className="login-card">
        <h2 className="login-title">Welcome Back</h2>
        <p className="login-subtitle">Please login to continue</p>

        <form className="login-form">
          <input type="email" placeholder="Email Address" required />
          <input type="password" placeholder="Password" required />

          <button type="submit">Login</button>
        </form>

        <div className="login-footer">
          <p>
            Don’t have an account?{" "}
            <Link to="/signup">Sign Up</Link> {/* 👈 reload nahi hoga */}
          </p>
        </div>
      </div>
    </section>
  );
};

export default LoginSection;
