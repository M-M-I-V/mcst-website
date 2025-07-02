"use client"

import { useState, useEffect, useRef } from "react"
import { Link, useLocation } from "react-router-dom"
import "../index.css"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null)
  const location = useLocation()
  const basePath = "/Home"
  const dropdownRef = useRef<HTMLDivElement>(null)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    setActiveDropdown(null) // Close dropdowns when toggling mobile menu
  }

  const isActive = (path: string) => {
    return location.pathname === path
  }

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  const handleMouseEnter = (dropdown: string) => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout)
      setHoverTimeout(null)
    }
    setActiveDropdown(dropdown)
  }

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null)
    }, 150) // Small delay to prevent flickering when moving between elements
    setHoverTimeout(timeout)
  }

  const closeDropdowns = () => {
    setActiveDropdown(null)
    if (hoverTimeout) {
      clearTimeout(hoverTimeout)
      setHoverTimeout(null)
    }
  }

  useEffect(() => {
    const controlHeader = () => {
      const currentScrollY = window.scrollY

      // Show header when at the top
      if (currentScrollY < 10) {
        setIsVisible(true)
      }
      // Hide header when scrolling down, show when scrolling up
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past threshold
        setIsVisible(false)
        setIsMenuOpen(false) // Close mobile menu when hiding
        setActiveDropdown(null) // Close dropdowns when hiding
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    // Add scroll event listener
    window.addEventListener("scroll", controlHeader)

    // Close dropdowns when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)

    // Cleanup
    return () => {
      window.removeEventListener("scroll", controlHeader)
      document.removeEventListener("mousedown", handleClickOutside)
      if (hoverTimeout) {
        clearTimeout(hoverTimeout)
      }
    }
  }, [lastScrollY, hoverTimeout])

  const navigationItems = [
    {
      label: "About",
      path: "/about",
      type: "link",
    },
    {
      label: "Admissions",
      type: "dropdown",
      items: [
        { label: "Program Offerings", path: "/programs", type: "internal" },
        { label: "Admissions Info", path: "/admission", type: "internal" },
      ],
    },
    {
      label: "Resources",
      type: "dropdown",
      items: [
        {
          label: "Registrar's Office",
          path: "https://sites.google.com/view/mcst-registrar/home",
          type: "external",
        },
        {
          label: "Learning Resource Center",
          path: "https://sites.google.com/view/mandaluyong-college-of-science/home",
          type: "external",
        },
      ],
    },
    {
      label: "Apply",
      path: "/apply",
      type: "link",
    },
  ]

  return (
    <header
      className={`bg-blue-900 text-white py-2 dark:text-slate-300 dark:bg-blue-800 fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
      ref={dropdownRef}
    >
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-4 mr-6">
          <Link to="/" onClick={closeDropdowns}>
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
          <Link to="/" onClick={closeDropdowns}>
            <h1 className="text-lg sm:text-xl font-bold dark:text-slate-300">
              Mandaluyong College of Science and Technology
            </h1>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center">
          {navigationItems.map((item, index) => (
            <div key={index} className="relative">
              {item.type === "link" ? (
                <Link
                  to={item.path!}
                  className={`hover:text-yellow-400 transition-colors ${isActive(item.path!) ? "text-yellow-400" : ""}`}
                  onClick={closeDropdowns}
                >
                  {item.label}
                </Link>
              ) : (
                <div
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className={`flex items-center space-x-1 hover:text-yellow-400 transition-colors ${
                      item.items?.some((subItem) => subItem.type === "internal" && isActive(subItem.path))
                        ? "text-yellow-400"
                        : ""
                    }`}
                    onClick={() => handleDropdownToggle(item.label)}
                    aria-expanded={activeDropdown === item.label}
                    aria-haspopup="true"
                  >
                    <span>{item.label}</span>
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === item.label ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Dropdown Menu */}
                  <div
                    className={`absolute top-full left-0 mt-2 w-56 bg-white dark:bg-zinc-800 rounded-lg shadow-lg border border-gray-200 dark:border-zinc-700 transition-all duration-200 ${
                      activeDropdown === item.label
                        ? "opacity-100 visible transform translate-y-0"
                        : "opacity-0 invisible transform -translate-y-2"
                    }`}
                    onMouseEnter={() => handleMouseEnter(item.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="py-2">
                      {item.items?.map((subItem, subIndex) =>
                        subItem.type === "external" ? (
                          <a
                            key={subIndex}
                            href={subItem.path}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between px-4 py-3 text-sm text-gray-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-zinc-700 hover:text-blue-900 dark:hover:text-yellow-400 transition-colors"
                            onClick={closeDropdowns}
                          >
                            <span>{subItem.label}</span>
                            <svg
                              className="w-3 h-3 ml-2 opacity-60"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              />
                            </svg>
                          </a>
                        ) : (
                          <Link
                            key={subIndex}
                            to={subItem.path}
                            className={`block px-4 py-3 text-sm text-gray-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-zinc-700 hover:text-blue-900 dark:hover:text-yellow-400 transition-colors ${
                              isActive(subItem.path)
                                ? "bg-blue-50 dark:bg-zinc-700 text-blue-900 dark:text-yellow-400"
                                : ""
                            }`}
                            onClick={closeDropdowns}
                          >
                            {subItem.label}
                          </Link>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white dark:text-slate-300 hover:text-yellow-400 transition-colors"
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
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="bg-blue-800 dark:bg-blue-900">
          {navigationItems.map((item, index) => (
            <div key={index}>
              {item.type === "link" ? (
                <Link
                  to={item.path!}
                  className={`block px-6 py-3 text-white hover:text-yellow-400 dark:text-slate-300 transition-colors border-b border-blue-700 dark:border-blue-800 ${
                    isActive(item.path!) ? "text-yellow-400 bg-blue-700 dark:bg-blue-800" : ""
                  }`}
                  onClick={() => {
                    setIsMenuOpen(false)
                    setActiveDropdown(null)
                  }}
                >
                  {item.label}
                </Link>
              ) : (
                <div>
                  <button
                    className={`w-full flex items-center justify-between px-6 py-3 text-white hover:text-yellow-400 dark:text-slate-300 transition-colors border-b border-blue-700 dark:border-blue-800 ${
                      item.items?.some((subItem) => subItem.type === "internal" && isActive(subItem.path))
                        ? "text-yellow-400 bg-blue-700 dark:bg-blue-800"
                        : ""
                    }`}
                    onClick={() => handleDropdownToggle(`mobile-${item.label}`)}
                  >
                    <span>{item.label}</span>
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === `mobile-${item.label}` ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Mobile Dropdown Items */}
                  <div
                    className={`transition-all duration-200 ease-in-out overflow-hidden ${
                      activeDropdown === `mobile-${item.label}` ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    {item.items?.map((subItem, subIndex) =>
                      subItem.type === "external" ? (
                        <a
                          key={subIndex}
                          href={subItem.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between px-10 py-2 text-sm text-white hover:text-yellow-400 dark:text-slate-300 transition-colors bg-blue-700 dark:bg-blue-800 border-b border-blue-600 dark:border-blue-700"
                          onClick={() => {
                            setIsMenuOpen(false)
                            setActiveDropdown(null)
                          }}
                        >
                          <span>{subItem.label}</span>
                          <svg
                            className="w-3 h-3 ml-2 opacity-60"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </a>
                      ) : (
                        <Link
                          key={subIndex}
                          to={subItem.path}
                          className={`block px-10 py-2 text-sm text-white hover:text-yellow-400 dark:text-slate-300 transition-colors bg-blue-700 dark:bg-blue-800 border-b border-blue-600 dark:border-blue-700 ${
                            isActive(subItem.path) ? "text-yellow-400" : ""
                          }`}
                          onClick={() => {
                            setIsMenuOpen(false)
                            setActiveDropdown(null)
                          }}
                        >
                          {subItem.label}
                        </Link>
                      ),
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header