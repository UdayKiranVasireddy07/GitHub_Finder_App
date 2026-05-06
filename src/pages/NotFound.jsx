import React from 'react'
import {FaHome} from 'react-icons/fa'
import { Link } from 'react-router-dom';
function NotFound() {
  return (
    <div className="hero">
      <div className="text" hero-content>
        <div className="max-w-lg">
            <h1 className="text-8xl font-bold mb-8">404</h1>
            <h2 className="text-4xl font-bold mb-4">Page Not Found</h2>
            <p className="text-lg mb-6">
              The page you are looking for does not exist.
            </p>
            <Link to="/" className="btn btn-primary">
              <FaHome /> Home
            </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound;
