import React, { useState, useTransition, useEffect } from "react";
import { FiUser, FiLock } from "react-icons/fi";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Cookies from "js-cookie";

/**
 * 🌍 Auto-detect API base URL
 * - Uses Render URL in production
 * - Uses localhost in local dev
 */
const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ||
  (window.location.hostname === "localhost"
    ? "http://localhost:8000"
    : "https://vts-backend-ms7k.onrender.com");

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isPending, startTransition] = useTransition();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [infoMessage, setInfoMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // ✅ Show info messages passed via query
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const msg = params.get("message");
    if (msg) {
      setInfoMessage(decodeURIComponent(msg));
      window.history.replaceState({}, document.title, "/login");
    }
  }, [location]);

  // ✅ Handle Login
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
      console.log("🌐 Using API:", `${API_BASE_URL}/api/auth/login`);

      const res = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: trimmedUsername, password }),
        credentials: "include",
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Invalid credentials");
      }

      const token = data.token;
      const role = data.user?.role;

      if (!token) throw new Error("No token received from server");

      // ✅ Save token in cookies + session
      sessionStorage.setItem("token", token);
      Cookies.set("token", token, { secure: true, sameSite: "Strict" });

      // ✅ Redirect based on role
      startTransition(() => {
        if (role === "admin") {
          const tokenParam = encodeURIComponent(token);
          window.location.href = `https://admin.vikashtechsolution.com/?token=${tokenParam}`;
        } else {
          navigate("/unauthorized");
        }
      });
    } catch (err) {
      console.error("❌ Login error:", err);
      if (err.name === "TypeError" && err.message.includes("Failed to fetch")) {
        setError("Unable to connect to server. Please try again later.");
      } else {
        setError(err.message || "Server error. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#E2E2E2] px-4">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-md p-8 relative">
        <Link
          to="/"
          className="absolute top-4 left-4 text-sm text-gray-600 hover:text-red-600"
        >
          ← Back to Home
        </Link>

        <div className="text-center mb-6">
          <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-red-100">
            <FiUser className="text-red-600 text-2xl" />
          </div>
          <h2 className="text-2xl font-bold text-black mt-3">Official Login</h2>
          <p className="text-sm text-gray-500 mt-1">
            Access restricted to authorized users only
          </p>
        </div>

        {/* ✅ Info / Error messages */}
        {infoMessage && (
          <p className="text-blue-600 text-sm font-medium text-center mb-2">
            {infoMessage}
          </p>
        )}
        {error && (
          <p className="text-red-500 text-sm font-medium text-center mb-2">
            {error}
          </p>
        )}

        <form className="space-y-5" onSubmit={handleLogin}>
          <div>
            <label className="block text-sm font-semibold mb-1">User ID</label>
            <div className="flex items-center border rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-red-500">
              <FiUser className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Enter your username"
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

          <button
            type="submit"
            disabled={loading || isPending}
            className={`w-full bg-gradient-to-r from-[#ED0331] to-[#87021C] text-white py-2 rounded-lg font-semibold hover:opacity-90 transition ${
              loading || isPending ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading || isPending ? "Signing In..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
