"use client"

import { useEffect, useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import HomePage from "./pages/HomePage"
import ThemeToggle from "./components/ThemeToggle"
import LoadingScreen from "./components/LoadingScreen"
import About from "./pages/About"
import Programs from "./pages/Programs"
import Admission from "./pages/Admission"
import Apply from "./pages/Apply"
import Communication from "./pages/Communication"
import InformationSystems from "./pages/InformationSystems"
import Mathematics from "./pages/Mathematics"

function App() {
  const [loading, setLoading] = useState(true)
  const [darkMode, setDarkMode] = useState(localStorage.getItem("darkMode") === "true")

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
    localStorage.setItem("darkMode", darkMode.toString())
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <Router>
      {loading && <LoadingScreen />}
      <div className="font-sans bg-gray-50 text-gray-800 dark:bg-zinc-900 dark:text-slate-200 min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/admission" element={<Admission />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="/programs/ba-communication" element={<Communication />} />
            <Route path="/programs/bs-information-systems" element={<InformationSystems />} />
            <Route path="/programs/bs-mathematics" element={<Mathematics />} />
          </Routes>
        </main>
        <Footer />
        <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </div>
    </Router>
  )
}

export default App