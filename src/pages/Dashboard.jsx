import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DashLayout from "./Dashboard/DashLayout";

const Dashboard = () => {
  const navigate = useNavigate();
  const [responses, setResponses] = useState([]);
  const [salesResponses, setSalesResponses] = useState([]);
  const [role, setRole] = useState("");

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
      const res = await fetch("http://localhost:5000/api/mail/responses");
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

  // Update status of a sales response to "Responded"
  const handleRespond = async (index) => {
    try {
      // PATCH endpoint to update status
      const res = await fetch(
        `http://localhost:5000/api/sales-response/${index}`,
        { method: "PATCH" }
      );
      const data = await res.json();
      if (data.success) {
        fetchSubmissions(); // refresh data
      }
    } catch (err) {
      console.error("Error updating status:", err);
    }
  };

  return (
    <DashLayout>
      {/* Top Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        {role === "admin" && (
          <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center justify-center">
            <h3 className="text-lg font-semibold text-gray-700">Responses</h3>
            <p className="text-3xl font-bold text-[#ED0331] mt-2">
              {responses.length}
            </p>
          </div>
        )}

        {(role === "admin" || role === "sales") && (
          <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center justify-center">
            <h3 className="text-lg font-semibold text-gray-700">
              Sales Response
            </h3>
            <p className="text-3xl font-bold text-[#87021C] mt-2">
              {salesResponses.length}
            </p>
          </div>
        )}
      </div>

      {/* Responses Table - only admin */}
      {role === "admin" && (
        <div className="bg-white p-6 rounded-xl shadow mb-6 overflow-x-auto">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">
            Responses Table
          </h2>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gradient-to-r from-[#ED0331] to-[#87021C] text-white text-sm uppercase">
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
                  className={`${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } hover:bg-gray-100 transition`}
                >
                  <td className="p-3 border-b">{res.name}</td>
                  <td className="p-3 border-b">{res.email}</td>
                  <td className="p-3 border-b">{res.phone}</td>
                  <td className="p-3 border-b">{res.query}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Sales Responses Table - admin and sales */}
      {(role === "admin" || role === "sales") && (
        <div className="bg-white p-6 rounded-xl shadow overflow-x-auto">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">
            Sales Response Table
          </h2>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gradient-to-r from-[#ED0331] to-[#87021C] text-white text-sm uppercase">
                <th className="p-3 text-left rounded-tl-lg">Name</th>
                <th className="p-3 text-left">Email</th>
                <th className="p-3 text-left">Mobile Number</th>
                <th className="p-3 text-left">Message</th>
                <th className="p-3 text-left">Status</th>
                {role === "admin" && <th className="p-3 text-left rounded-tr-lg">Action</th>}
              </tr>
            </thead>
            <tbody>
              {salesResponses.map((res, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } hover:bg-gray-100 transition`}
                >
                  <td className="p-3 border-b">{res.name}</td>
                  <td className="p-3 border-b">{res.email}</td>
                  <td className="p-3 border-b">{res.phone}</td>
                  <td className="p-3 border-b">{res.query}</td>
                  <td className="p-3 border-b">
                    <span
                      className={`px-2 py-1 rounded text-xs font-semibold ${
                        res.status === "pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-green-100 text-green-700"
                      }`}
                    >
                      {res.status}
                    </span>
                  </td>
                  {role === "admin" && (
                    <td className="p-3 border-b">
                      {res.status === "pending" && (
                        <button
                          onClick={() => handleRespond(index)}
                          className="px-4 py-1 bg-gradient-to-r from-[#ED0331] to-[#87021C] text-white rounded-lg hover:opacity-90 transition"
                        >
                          Respond
                        </button>
                      )}
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
