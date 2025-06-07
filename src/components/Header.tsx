"use client"

import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import "../index.css" // Ensure Tailwind CSS is imported

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const basePath = "/Home"

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const isActive = (path: string) => {
    return location.pathname === path
  }

  return (
    <header className="bg-blue-900 text-white py-2 dark:text-slate-300 dark:bg-blue-800 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-4">
          <Link to="/">
            <img
              src={`${basePath}/images/mcst-logo.png`}
              alt="MCST Logo"
              className="max-h-20 w-auto sm:max-h-16"
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.src = "https://placehold.co/80x80/1e3a8a/ffffff?text=MCST"
              }}
            />
          </Link>
          <Link to="/">
            <h1 className="text-lg sm:text-xl font-bold dark:text-slate-300">
              Mandaluyong College of Science and Technology
            </h1>
          </Link>
        </div>

        <nav className="hidden md:flex space-x-4">
          <Link to="/about" className={`hover:text-yellow-400 ${isActive("/about") ? "text-yellow-400" : ""}`}>
            About Us
          </Link>
          <Link to="/programs" className={`hover:text-yellow-400 ${isActive("/programs") ? "text-yellow-400" : ""}`}>
            Programs Offered
          </Link>
          <Link to="/admission" className={`hover:text-yellow-400 ${isActive("/admission") ? "text-yellow-400" : ""}`}>
            Admissions Info
          </Link>
          <Link to="/apply" className={`hover:text-yellow-400 ${isActive("/apply") ? "text-yellow-400" : ""}`}>
            Apply
          </Link>
        </nav>

        <button
          className="md:hidden text-white dark:text-slate-300"
          onClick={toggleMenu}
          aria-label="Toggle Navigation"
          aria-controls="mobile-menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="bg-blue-800 p-4 space-y-2">
            <Link
              to="/about"
              className={`block text-white hover:text-yellow-400 dark:text-slate-300 ${isActive("/about") ? "text-yellow-400" : ""}`}
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/programs"
              className={`block text-white hover:text-yellow-400 dark:text-slate-300 ${isActive("/programs") ? "text-yellow-400" : ""}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Programs Offered
            </Link>
            <Link
              to="/admission"
              className={`block text-white hover:text-yellow-400 dark:text-slate-300 ${isActive("/admission") ? "text-yellow-400" : ""}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Admissions Info
            </Link>
            <Link
              to="/apply"
              className={`block text-white hover:text-yellow-400 dark:text-slate-300 ${isActive("/apply") ? "text-yellow-400" : ""}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Apply
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header