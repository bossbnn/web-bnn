// Footer.jsx
import React from "react";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="relative pt-10">
      <footer className="pt-5 border-t absolute w-full">
        <div className="flexjustify-between ">
          <div className="flex justify-between flex-wrap">
            <div className="flex items-center gap-2 pb-10 flex-wrap">
              <Link to="https://boss.bnn.go.id/">
                <img
                  src="https://boss.bnn.go.id/assets3/img/logo-boss-hitam.png"
                  alt="Logo"
                  className="h-6 w-auto"
                />
              </Link>
              <span className="text-sm">© 2024</span>
              <Link
                to="https://bnn.go.id/"
                className="text-lg underline text-blue-500 hover:text-blue-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                Badan Narkotika Nasional RI
              </Link>
            </div>
            <div className="flex text-3xl gap-4">
              <Link to="/">
                <FaTwitterSquare />
              </Link>
              <Link to="/">
                <FaInstagramSquare />
              </Link>
              <Link to="/">
                <FaFacebookSquare />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
