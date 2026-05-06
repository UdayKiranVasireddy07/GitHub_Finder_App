import React from 'react'

export default function Footer() {
  const footerYear = new Date().getFullYear();
  return (
    <footer className="footer p-10 bg-gray-800 text-primary-content footer-center">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="inline-block w-6 h-6 stroke-current"
        >
          <path d="M12 2L2 7h20L12 2z" />
        </svg>
        <p>Copyright © {footerYear} - All rights reserved</p>
      </div>
    </footer>
  )
}
