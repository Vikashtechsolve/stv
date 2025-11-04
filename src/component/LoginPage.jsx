import React, { useState } from "react";
import { FiUser, FiLock } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    const trimmedUsername = username.trim();

    if (!trimmedUsername || !password) {
      setError("Please enter both username and password");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("http://localhost:8000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: trimmedUsername, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Login failed");
        setLoading(false);
        return;
      }

      // Save user info in localStorage
      localStorage.setItem("user", JSON.stringify(data));

      // Redirect based on role
      if (data.role === "admin" || data.role === "sales") {
        navigate("/dashboard");
      } else {
        navigate("/");
      }
    } catch (err) {
      console.error(err);
      setError("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#E2E2E2] px-4">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-md p-8 relative">
        {/* Back to home */}
        <Link
          to="/"
          className="absolute top-4 left-4 text-sm text-gray-600 hover:text-red-600"
        >
          ← Back to Home
        </Link>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-red-100">
            <FiUser className="text-red-600 text-2xl" />
          </div>
          <h2 className="text-2xl font-bold text-black mt-3">Official Login</h2>
          <p className="text-sm text-gray-500 mt-1">
            Access restricted to authorized users only
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5" onSubmit={handleLogin}>
          <div>
            <label className="block text-sm font-semibold mb-1">User ID</label>
            <div className="flex items-center border rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-red-500">
              <FiUser className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Enter your employee ID"
                className="w-full outline-none text-sm"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Password</label>
            <div className="flex items-center border rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-red-500">
              <FiLock className="text-gray-400 mr-2" />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full outline-none text-sm"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-gradient-to-r from-[#ED0331] to-[#87021C] text-white py-2 rounded-lg font-semibold hover:opacity-90 transition ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
