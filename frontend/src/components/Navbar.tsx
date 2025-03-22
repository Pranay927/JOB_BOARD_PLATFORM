import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useGlobalStore } from "../store/useGlobalStore";
import { Menu, X } from "lucide-react"; 

export default function Navbar() {
  const { isDarkMode, toggleDarkMode, userRole } = useGlobalStore();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false); // Mobile menu state

  if (location.pathname === "/") {
    return null; // Hide Navbar on Landing page
  }

  return (
    <nav className="bg-white dark:bg-black text-indigo-600 dark:text-white py-3 px-6 shadow-md transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Logo */}
        <Link
          to="/"
          className="font-bold text-lg duration-300 transition-transform hover:scale-105"
        >
          JobBoard
        </Link>

        {/* Right: Navigation Links */}
        <div className="hidden md:flex items-center space-x-4">
          <NavLinks />
          <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {menuOpen && (
        <div className="md:hidden mt-2 flex flex-col items-center gap-3 bg-white dark:bg-black py-4 shadow-lg">
          <NavLinks />
          <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        </div>
      )}
    </nav>
  );
}

/* Extracted Navigation Links */
function NavLinks() {
  return (
    <>
      <Link to="/Home" className="hover:text-blue-600 font-medium transition-all">
        Home
      </Link>
      <Link to="/createJob" className="hover:text-blue-600 font-medium transition-all">
        Create a Job
      </Link>
      <Link to="/dashboard" className="hover:text-blue-600 font-medium transition-all">
        Dashboard
      </Link>
      <Link
        to="/"
        className="hover:text-blue-600 font-medium transition-all"
        onClick={() => localStorage.setItem("token", "")}
      >
        Logout
      </Link>
    </>
  );
}

/* Extracted Dark Mode Toggle */
function DarkModeToggle({ isDarkMode, toggleDarkMode }: { isDarkMode: boolean; toggleDarkMode: () => void }) {
  return (
    <button
      onClick={() => {
        toggleDarkMode();
        document.documentElement.classList.toggle("dark");
      }}
      className="px-3 py-1 rounded-md border border-gray-500 text-sm transition-all 
              hover:bg-gray-700 dark:hover:bg-gray-300 hover:text-white dark:hover:text-black"
    >
      {isDarkMode ? "Light Mode ☀️" : "Dark Mode 🌙"}
    </button>
  );
}
