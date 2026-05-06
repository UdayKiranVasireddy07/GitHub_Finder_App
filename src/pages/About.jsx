import React from 'react'

export default function About() {
  return (
    <div className="card bg-base-200 shadow-xl p-6">
      <h1 className="text-3xl font-bold mb-4">About This App</h1>
      <p className="mb-4">
        <strong>GitHub Finder</strong> is a React application that allows users to
        search GitHub profiles and view detailed information such as repositories,
        followers, and activity. It’s built with React Router, Tailwind CSS, and
        DaisyUI for styling.
      </p>
      <p className="mb-4">
        The purpose of this project is to demonstrate practical skills in
        front‑end development, API integration, and responsive UI design. It
        showcases how to consume external APIs, manage routes, and create a
        polished user experience.
      </p>
      <p className="mb-4">
        <strong>Version:</strong> 1.0.0
      </p>
      <p className="mb-6">
        <strong>Developer:</strong> V. Uday Kiran — B.Tech Computer Science
        Engineering student at GMR Institute of Technology.
      </p>

      {/* Essential Links */}
      <div className="space-y-2">
        <a
          href="https://github.com/yourusername/github-finder"
          target="_blank"
          rel="noreferrer"
          className="link link-primary"
        >
          🔗 View Source on GitHub
        </a>
        <a
          href="https://docs.github.com/en/rest"
          target="_blank"
          rel="noreferrer"
          className="link link-primary"
        >
          📘 GitHub API Documentation
        </a>
        <a
          href="https://yourportfolio.com"
          target="_blank"
          rel="noreferrer"
          className="link link-primary"
        >
          🌐 Visit My Portfolio
        </a>
        <a
          href="https://www.linkedin.com/in/yourlinkedin"
          target="_blank"
          rel="noreferrer"
          className="link link-primary"
        >
          💼 Connect on LinkedIn
        </a>
      </div>
    </div>
  )
}
