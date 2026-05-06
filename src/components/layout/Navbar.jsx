import React from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
 export default function Navbar({ title }) {
  console.log(title);
  return (
    <nav className="navbar mb-12 shadow-lg bg-gray-900 text-neutral-content">
      <div className="container">
        <div className="flex-none">
          <FaGithub className="inline pr-2 text-3xl" />
          <Link to="/" className="text-lg font-bold align-middle ">
            {title}
          </Link>
        </div>
        <div className="flex-1 px-2">
          <div className="flex justify-end ml-2">
            <Link
              to="/"
              className="btn btn-ghost btn-sm rounded-btn text-white hover:bg-gray-700 hover:text-gray-200 transition-colors duration-200"
            >
              Home
            </Link>

            <Link
              to="/about"
              className="btn btn-ghost btn-sm rounded-btn text-white hover:bg-gray-700 hover:text-gray-200 transition-colors duration-200"
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.defaultProps = {
  title: "Github Finder",
};

Navbar.propTypes = {
  title: PropTypes.string,
};
