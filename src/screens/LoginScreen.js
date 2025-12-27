import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const LoginScreen = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState("javeria@gmail.com");
  const [password, setPassword] = useState("javeria");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const success = await login(email, password);
      if (success) {
        navigate("/products"); // go to product list
      } else {
        setError("Invalid credentials");
      }
    } catch (err) {
      setError("Network error. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #7dd3fc, #3b82f6)",
        fontFamily: "Arial, sans-serif",
        padding: 20,
      }}
    >
      <form
        onSubmit={handleLogin}
        style={{
          backgroundColor: "white",
          borderRadius: 20,
          padding: 40,
          width: 320,
          boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: 20, color: "#1e40af" }}>Welcome Back!</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{
            width: "100%",
            padding: 12,
            marginBottom: 16,
            borderRadius: 10,
            border: "1px solid #93c5fd",
            outline: "none",
          }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{
            width: "100%",
            padding: 12,
            marginBottom: 20,
            borderRadius: 10,
            border: "1px solid #93c5fd",
            outline: "none",
          }}
        />

        {error && (
          <div
            style={{
              color: "#ef4444",
              marginBottom: 16,
              fontSize: 14,
              fontWeight: "bold",
            }}
          >
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          style={{
            width: "100%",
            padding: 12,
            borderRadius: 10,
            border: "none",
            backgroundColor: "#2563eb",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
            fontSize: 16,
            transition: "0.3s",
          }}
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <p style={{ marginTop: 16, fontSize: 12, color: "#1e3a8a" }}>
          Use <b>javeria@gmail.com</b> / <b>javeria</b>
        </p>
      </form>
    </div>
  );
};

export default LoginScreen;
