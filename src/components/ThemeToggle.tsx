import "../index.css"

interface ThemeToggleProps {
  darkMode: boolean
  toggleDarkMode: () => void
}

const ThemeToggle = ({ darkMode, toggleDarkMode }: ThemeToggleProps) => {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={toggleDarkMode}
        className="bg-gray-800 text-white px-4 py-2 rounded-full shadow hover:bg-gray-700 transition-colors"
        aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      >
        <span id="theme-icon">{darkMode ? "🌞" : "🌓"}</span>
      </button>
    </div>
  )
}

export default ThemeToggle
