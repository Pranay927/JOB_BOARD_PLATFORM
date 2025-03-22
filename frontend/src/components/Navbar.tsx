import { Link } from "react-router-dom";
import { useGlobalStore } from "../store/useGlobalStore";

export default function Navbar() {
  const { isDarkMode, toggleDarkMode } = useGlobalStore();

  return (
    <nav className="bg-white text-black dark:bg-black dark:text-white py-2 px-6 shadow-md  transition-all">
      <div className="w-full mx-auto flex items-center justify-between gap-3 text-sm">
        {/* Logo */}
        <div>
          <Link to="/" className="font-bold text-lg hover:opacity-80 transition-opacity">
            JobBoard
          </Link>
        </div>

        {/* Links */}
        <div className="flex gap-2 items-center">
          <Link to="/" className="hover:text-blue-600 font-medium transition-all">
            Home
          </Link>
          <span className="text-gray-500 dark:text-gray-400">/</span>

          <Link to="/createJob" className="hover:text-blue-600 font-medium transition-all">
            Create a Job
          </Link>
          <span className="text-gray-500 ">/</span>

          <Link to="/dashboard" className="hover:text-blue-600 font-medium transition-all">
            Dashboard
          </Link>
          <span className="text-gray-500 dark:text-gray-400">/</span>

          <Link to="/" className="hover:text-blue-600 font-medium transition-all"
            onClick={()=>{
              localStorage.setItem("token","")
            }}>
            logout

          </Link>

          {/* Dark Mode Toggle Button */}
          <button
            onClick={() => {
              toggleDarkMode();
              document.documentElement.classList.toggle("dark"); // Adds or removes "dark" class on <html>
            }}
            className="ml-3 px-3 py-1 rounded-md border border-gray-500 text-sm transition-all 
              hover:bg-gray-700 dark:hover:bg-gray-300 hover:text-white dark:hover:text-black"
          >
            {isDarkMode ? "Light Mode ☀️" : "Dark Mode 🌙"}
          </button>
        </div>
      </div>
    </nav>
  );
}
