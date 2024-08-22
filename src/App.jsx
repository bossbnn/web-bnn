import React, { useState } from "react";
import Home from "./Pages/Home";
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./Pages/Login";
import FileUpload from "./Pages/FileUpload";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // State untuk autentikasi

  const handleLogin = () => {
    setIsAuthenticated(true); // Mengubah state isAuthenticated menjadi true setelah login
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={<Login onLogin={handleLogin} />} // Passing fungsi handleLogin ke komponen Login
        />
        <Route
          path="/fileupload"
          element={isAuthenticated ? <FileUpload /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
