// src/pages/Landing.tsx
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
          Find Your Dream Job with{" "}
          <span className="text-indigo-600">JobBoard</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-8">
          Discover thousands of opportunities from top companies. Whether you're
          a seeker or a company, we connect talent with the right roles.
        </p>
        <div className="flex gap-4">
          <Link
            to="/signup"
            className="bg-black text-white px-8 py-3 rounded-md  font-semibold   hover:scale-105 transition duration-300"
          >
            Get Started
          </Link>
        </div>
        <div className="fixed bottom-5 left-5 text-md text-gray-500">
          <a
            href="https://docs.google.com/document/d/1guBHJInIn7pMQ-wTDIaDjQpFkvmt0XoqJ7lg1NRwG4g/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="font-semibold">
              Built by
              <span className="text-black hover:scale-110 transition duration-300">
                {" "}
                Pranay
              </span>
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}
