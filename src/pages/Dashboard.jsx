import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DashLayout from "./Dashboard/DashLayout";

const Dashboard = () => {
  const navigate = useNavigate();
  const [responses, setResponses] = useState([]);
  const [salesResponses, setSalesResponses] = useState([]);
  const [role, setRole] = useState("");
  const [statusChanges, setStatusChanges] = useState({}); // Temporary dropdown values

  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

  // Check login
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      navigate("/login");
    } else {
      setRole(user.role);
    }
  }, [navigate]);

  // Fetch submissions from backend
  const fetchSubmissions = async () => {
    try {
      const res = await fetch(`${API_URL}/api/mail/responses`);
      const data = await res.json();
      setResponses(data.response || []);
      setSalesResponses(data.salesResponse || []);
    } catch (err) {
      console.error("Error fetching submissions:", err);
    }
  };

  useEffect(() => {
    fetchSubmissions();
  }, []);

  // Handle dropdown change (sales user)
  const handleDropdownChange = (index, value) => {
    setStatusChanges((prev) => ({ ...prev, [index]: value }));
  };

  // Update status on button click
  const handleUpdateStatus = async (index) => {
    try {
      const newStatus = statusChanges[index];
      if (!newStatus) return;

      const res = await fetch(`${API_URL}/api/sales-response/${index}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ role: "sales", status: newStatus }),
      });

      const data = await res.json();
      if (data.success) {
        fetchSubmissions();
        setStatusChanges((prev) => {
          const copy = { ...prev };
          delete copy[index];
          return copy;
        });
      }
    } catch (err) {
      console.error("Error updating status:", err);
    }
  };

  return (
    <DashLayout>
      {/* Top Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {role === "admin" && (
          <div className="bg-white shadow rounded-lg p-4 sm:p-6 flex flex-col items-center justify-center">
            <h3 className="text-lg font-semibold text-gray-700">Responses</h3>
            <p className="text-3xl sm:text-4xl font-bold text-[#ED0331] mt-2">
              {responses.length}
            </p>
          </div>
        )}

        {(role === "admin" || role === "sales") && (
          <div className="bg-white shadow rounded-lg p-4 sm:p-6 flex flex-col items-center justify-center">
            <h3 className="text-lg font-semibold text-gray-700">Sales Response</h3>
            <p className="text-3xl sm:text-4xl font-bold text-[#87021C] mt-2">
              {salesResponses.length}
            </p>
          </div>
        )}
      </div>

      {/* Responses Table - Admin only */}
      {role === "admin" && (
        <div className="bg-white p-4 sm:p-6 rounded-xl shadow mb-6 overflow-x-auto">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">
            Responses Table
          </h2>
          <table className="min-w-full divide-y divide-gray-200 text-sm sm:text-base">
            <thead>
              <tr className="bg-gradient-to-r from-[#ED0331] to-[#87021C] text-white text-xs sm:text-sm uppercase">
                <th className="p-3 text-left rounded-tl-lg">Name</th>
                <th className="p-3 text-left">Email</th>
                <th className="p-3 text-left">Mobile Number</th>
                <th className="p-3 text-left rounded-tr-lg">Message</th>
              </tr>
            </thead>
            <tbody>
              {responses.map((res, index) => (
                <tr
                  key={index}
                  className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"} hover:bg-gray-100 transition`}
                >
                  <td className="p-2 sm:p-3 border-b">{res.name}</td>
                  <td className="p-2 sm:p-3 border-b">{res.email}</td>
                  <td className="p-2 sm:p-3 border-b">{res.phone}</td>
                  <td className="p-2 sm:p-3 border-b">{res.query}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Sales Responses Table */}
      {(role === "admin" || role === "sales") && (
        <div className="bg-white p-4 sm:p-6 rounded-xl shadow overflow-x-auto">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">
            Sales Response Table
          </h2>
          <table className="min-w-full divide-y divide-gray-200 text-sm sm:text-base">
            <thead>
              <tr className="bg-gradient-to-r from-[#ED0331] to-[#87021C] text-white text-xs sm:text-sm uppercase">
                <th className="p-3 text-left rounded-tl-lg">Name</th>
                <th className="p-3 text-left">Email</th>
                <th className="p-3 text-left">Mobile Number</th>
                <th className="p-3 text-left">Message</th>
                <th className="p-3 text-left">Status</th>
                {role === "sales" && <th className="p-3 text-left rounded-tr-lg">Update</th>}
              </tr>
            </thead>
            <tbody>
              {salesResponses.map((res, index) => (
                <tr
                  key={index}
                  className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"} hover:bg-gray-100 transition`}
                >
                  <td className="p-2 sm:p-3 border-b">{res.name}</td>
                  <td className="p-2 sm:p-3 border-b">{res.email}</td>
                  <td className="p-2 sm:p-3 border-b">{res.phone}</td>
                  <td className="p-2 sm:p-3 border-b">{res.query}</td>
                  <td className="p-2 sm:p-3 border-b">
                    {role === "sales" ? (
                      <select
                        value={statusChanges[index] || res.status}
                        onChange={(e) => handleDropdownChange(index, e.target.value)}
                        className="border px-2 py-1 rounded w-full sm:w-auto"
                      >
                        <option value="pending">Pending</option>
                        <option value="responded">Responded</option>
                      </select>
                    ) : (
                      <span
                        className={`px-2 py-1 rounded text-xs sm:text-sm font-semibold ${
                          res.status === "pending"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-green-100 text-green-700"
                        }`}
                      >
                        {res.status}
                      </span>
                    )}
                  </td>
                  {role === "sales" && (
                    <td className="p-2 sm:p-3 border-b">
                      <button
                        onClick={() => handleUpdateStatus(index)}
                        className="px-3 py-1 sm:px-4 sm:py-2 rounded bg-gradient-to-r from-[#ED0331] to-[#87021C] text-white w-full sm:w-auto hover:opacity-90 transition"
                      >
                        Update
                      </button>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </DashLayout>
  );
};

export default Dashboard;
