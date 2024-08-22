import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed top-0 left-0 right-0 w-full 2xl:px-20 xl:px-16 lg:px-12 md:px-8 sm:px-5 px-5 py-5 border bg-white">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-center gap-4">
          <div>
            <Link to="/">
              <img
                src="https://boss.bnn.go.id/assets3/img/logo-boss-hitam.png"
                alt="Logo"
                className="h-8"
              />
            </Link>
          </div>
          <Link
            to="https://boss.bnn.go.id/"
            className="text-xl font-bold transition-all hover:text-blue-500 hidden md:block"
          >
            BERANDA
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/"
              className="rounded border bg-yellow-500 px-4 py-2 hover:bg-yellow-400 transition"
            >
              Tracking Permohonan
            </Link>
            <Link
              to="/login"
              className="rounded border border-blue-500 px-4 py-2 hover:bg-blue-500 transition text-blue-500 hover:text-white"
            >
              Login
            </Link>
          </div>
          <button
            className="text-2xl md:hidden focus:outline-none"
            onClick={toggleMenu}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 mt-4">
          <Link
            to="/"
            className="text-xl font-bold transition-all hover:text-blue-500"
          >
            BERANDA
          </Link>
          <Link
            to="/"
            className="rounded border bg-yellow-500 px-4 py-2 hover:bg-yellow-400 transition"
          >
            Tracking Permohonan
          </Link>
          <Link
            to="/login"
            className="rounded border border-blue-500 px-4 py-2 hover:bg-blue-500 transition text-blue-500 hover:text-white"
          >
            Login
          </Link>
        </div>
      )}
    </div>
  );
}

export default NavBar;
