import React, { useState } from "react";
import Navbar from "../Components/NavBar";
import { useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
  // Menerima props onLogin
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Inisialisasi useNavigate

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "bnn123" && password === "bnn123") {
      setError("");
      onLogin(); // Memanggil fungsi onLogin untuk mengubah state isAuthenticated
      navigate("/fileupload");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="w-full max-w-sm p-8 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
